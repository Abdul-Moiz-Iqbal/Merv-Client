const sampleCompanies = [
  {
    id: 1,
    name: "Vietnam Agricultural Export Co.",
    category: "agriculture",
    description: "Premium rice and agricultural products exporter",
    location: "Ho Chi Minh City",
    established: "2010",
    email: "info@vietag.com",
    phone: "+84 28 1234 5678",
    website: "www.vietag.com",
    products: ["Rice", "Coffee", "Spices", "Fruits"],
    certifications: ["ISO 9001", "HACCP", "Organic"],
    isNew: true,
  },
  {
    id: 2,
    name: "Saigon Textile Manufacturing",
    category: "textile",
    description: "High-quality textile and garment manufacturer",
    location: "Ho Chi Minh City",
    established: "2008",
    email: "contact@saigontextile.com",
    phone: "+84 28 2345 6789",
    website: "www.saigontextile.com",
    products: ["T-shirts", "Jeans", "Uniforms", "Fabrics"],
    certifications: ["OEKO-TEX", "GOTS", "WRAP"],
    isNew: false,
  },
  {
    id: 3,
    name: "Hanoi Electronics Ltd.",
    category: "electronics",
    description: "Consumer electronics and components supplier",
    location: "Hanoi",
    established: "2015",
    email: "sales@hanoielectronics.com",
    phone: "+84 24 3456 7890",
    website: "www.hanoielectronics.com",
    products: ["Smartphones", "Tablets", "Components", "Accessories"],
    certifications: ["CE", "FCC", "RoHS"],
    isNew: true,
  },
  {
    id: 4,
    name: "Mekong Seafood Processing",
    category: "seafood",
    description: "Premium seafood processor and exporter",
    location: "Can Tho",
    established: "2012",
    email: "export@mekongseafood.com",
    phone: "+84 292 3456 789",
    website: "www.mekongseafood.com",
    products: ["Shrimp", "Fish", "Crab", "Squid"],
    certifications: ["FDA", "EU Approval", "BRC"],
    isNew: false,
  },
  {
    id: 5,
    name: "Dalat Cosmetics Co.",
    category: "cosmetics",
    description: "Natural cosmetics and skincare products",
    location: "Da Lat",
    established: "2018",
    email: "info@dalatcosmetics.com",
    phone: "+84 263 3456 789",
    website: "www.dalatcosmetics.com",
    products: ["Skincare", "Makeup", "Herbal Products", "Essential Oils"],
    certifications: ["Organic", "Cruelty-Free", "FDA"],
    isNew: true,
  },
];

// Global variables
async function fetchData() {
  try {
    const response = await fetch("https://merv-xuhe.vercel.app/api/company");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // or .text(), .blob(), etc.
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

// Sample data for demo
function getSampleData() {
  return [
    {
      _id: "1",
      name: "Samsung Electronics Vietnam",
      email: "contact@samsung-vn.com",
      contact: "Nguyen Van A",
      phone: "+84-123-456-789",
      category: "cosmetics",
      productDescription: {
        en: "We manufacture consumer electronics and mobile devices.",
        tr: "Tüketici elektroniği ve mobil cihazlar üretiyoruz.",
        vi: "Chúng tôi sản xuất thiết bị điện tử tiêu dùng và thiết bị di động.",
      },
      logo: "https://haodymed.com/wp-content/uploads/2022/02/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220421165817.png",
      status: "approved",
      category: "electronics",
      createdAt: "2025-01-15T10:30:00.000Z",
    },
    {
      _id: "2",
      name: "Vietnam Textile Co.",
      email: "info@vn-textile.com",
      contact: "Tran Thi B",
      phone: "+84-987-654-321",
      category: "cosmetics",
      productDescription: {
        en: "High-quality textile and garment manufacturing.",
        tr: "Yüksek kaliteli tekstil ve hazır giyim üretimi.",
        vi: "Sản xuất dệt may chất lượng cao.",
      },
      logo: "https://via.placeholder.com/100x100/764ba2/ffffff?text=VThttps://haodymed.com/wp-content/uploads/2022/02/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220421165817.png",
      status: "pending",
      category: "textile",
      createdAt: "2025-01-10T14:20:00.000Z",
    },
    {
      _id: "3",
      name: "Mekong Seafood Export",
      email: "export@mekong-seafood.vn",
      contact: "Le Van C",
      phone: "+84-555-123-456",
      category: "cosmetics",
      productDescription: {
        en: "Fresh and processed seafood export company.",
        tr: "Taze ve işlenmiş deniz ürünleri ihracat şirketi.",
        vi: "Công ty xuất khẩu hải sản tươi sống và chế biến.",
      },
      logo: "https://res.cloudinary.com/dhpx0g7bc/image/upload/v1750597835/purpleworld17_emqyjo.jpg",
      status: "approved",
      category: "seafood",
      createdAt: "2025-01-05T09:15:00.000Z",
    },
  ];
}

// Call the function
let data;
fetchData().then((result) => {
  data = result;
  console.log("Fetched in global scope:", data);
  // You can call other functions here that use the data
});

let companies = [...sampleCompanies];
// let currentLanguage = 'tr';
let selectedCategories = [];
let currentSearchTerm = "";
let searchTimeout;
let currentResults = [];

// Categories data
const categories = [
  { id: "agriculture", name: "Tarım ve Gıda", icon: "🌾" },
  { id: "textile", name: "Giyim ve Tekstil", icon: "👕" },
  { id: "cosmetics", name: "Kozmetik", icon: "💄" },
  { id: "electronics", name: "Elektronik", icon: "💻" },
  { id: "furniture", name: "Mobilya ve Ev Dekorasyonu", icon: "🪑" },
  { id: "handicrafts", name: "El Sanatları", icon: "🎨" },
  { id: "jewelry", name: "Mücevher ve Aksesuar", icon: "💎" },
  { id: "medical", name: "Medikal ve Sağlık", icon: "🏥" },
  { id: "seafood", name: "Deniz Ürünleri", icon: "🦐" },
];

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  initializeCategoryChips();
  fetchData().then((result) => {
    data = result;
    console.log("Fetched in global scope:", data);
    // You can call other functions here that use the data
    initializeSlider();
    loadCompanies();
  });
});

function goToHome() {
  showPage("home");
  window.scrollTo(0, 0);
}

// Language switching functions (kept for compatibility)
function toggleLanguageDropdown() {
  const dropdown = document.getElementById("languageDropdown");
  dropdown.classList.toggle("active");
}

function changeLanguage(lang) {
  currentLanguage = lang;
  const languageNames = {
    tr: "TR",
    en: "EN",
    vi: "VI",
  };
  document.getElementById("currentLanguage").textContent = languageNames[lang];

  // Update active language option
  document.querySelectorAll(".language-option").forEach((option) => {
    option.classList.remove("active");
  });

  // Fix the querySelector syntax
  const activeOption = document.querySelector(
    `[onclick="changeLanguage('${lang}')"]`
  );
  if (activeOption) {
    activeOption.classList.add("active");
  }

  // Close dropdown
  document.getElementById("languageDropdown").classList.remove("active");
}

// Smooth scroll to section
function scrollToSection(sectionId) {
  showPage("home");
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, 100);
}

// Page navigation
function showPage(pageId) {
  console.log("Showing page:", pageId);

  // Hide all pages
  document.querySelectorAll(".page-section").forEach((page) => {
    page.classList.remove("active");
  });

  // Show selected page
  const targetPage = document.getElementById(pageId + "-page");
  if (targetPage) {
    targetPage.classList.add("active");
    console.log("Page activated successfully");
  } else {
    console.error("Page not found:", pageId);
  }

  // Scroll to top
  window.scrollTo(0, 0);

  // If going to "search" page and there is no input/filter, show all
  if (pageId === "search") {
    currentSearchTerm = "";
    selectedCategories = [];
    updateCategoryChips();
    performSearchPageSearch();
  }
}

// Modal functions
function openApplicationModal() {
  document.getElementById("applicationModal").classList.add("active");
}

function closeApplicationModal() {
  document.getElementById("applicationModal").classList.remove("active");
}

// Home search functionality
function performHomeSearch() {
  const searchTerm = document.getElementById("homeSearchInput").value.trim();
  if (searchTerm) {
    showPage("search");
    document.getElementById("searchPageInput").value = searchTerm;
    performSearchPageSearch();
  }
}

function navigateToCategory(categoryId) {
  console.log("Navigating to category:", categoryId);
  showPage("search");
  selectedCategories = [categoryId];
  updateCategoryChips();
  performSearchPageSearch();
}

// Initialize category chips
function initializeCategoryChips() {
  const chipsContainer = document.getElementById("categoryChips");
  // if (!chipsContainer) return;

  // chipsContainer.innerHTML = categories
  //   .map(
  //     (category) => `
  //       <div class="category-chip" data-category="${category.id}" onclick="toggleCategoryChip('${category.id}')">
  //         <span class="chip-name">${t(categoryKeys.name)}</span>
  //         <button class="chip-remove" onclick="removeCategoryChip('${category.id}', event)">&times;</button>
  //       </div>
  //     `
  //   )
  //   .join("");
}

// Update category chips display
function updateCategoryChips() {
  const chips = document.querySelectorAll(".category-chip");
  chips.forEach((chip) => {
    const categoryId = chip.dataset.category;
    if (selectedCategories.includes(categoryId)) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
}

// Toggle category chip
function toggleCategoryChip(categoryId) {
  if (selectedCategories.includes(categoryId)) {
    selectedCategories = selectedCategories.filter((id) => id !== categoryId);
  } else {
    selectedCategories.push(categoryId);
  }
  updateCategoryChips();
  performSearchPageSearch();
}

// Remove category chip
function removeCategoryChip(categoryId, event) {
  event.stopPropagation();
  selectedCategories = selectedCategories.filter((id) => id !== categoryId);
  updateCategoryChips();
  performSearchPageSearch();
}

// Clear all filters
function clearAllFilters() {
  selectedCategories = [];
  currentSearchTerm = "";
  document.getElementById("searchPageInput").value = "";
  updateCategoryChips();
  performSearchPageSearch();
}

// Search page search functionality
function performSearchPageSearch() {
  const searchInput = document.getElementById("searchPageInput");
  if (!searchInput) return;

  const searchTerm = searchInput.value.toLowerCase().trim();
  currentSearchTerm = searchTerm;

  const loading = document.getElementById("searchPageLoading");
  const resultsGrid = document.getElementById("searchPageResultsGrid");
  const noResults = document.getElementById("searchPageNoResults");
  const resultsCount = document.getElementById("searchPageResultsCount");

  if (!loading || !resultsGrid || !noResults || !resultsCount) {
    console.error("Search page elements not found");
    return;
  }

  // Clear previous timeout
  if (searchTimeout) {
    clearTimeout(searchTimeout);
  }

  // Show loading
  loading.classList.add("show");
  resultsGrid.innerHTML = "";
  noResults.style.display = "none";

  // Simulate search delay
  searchTimeout = setTimeout(() => {
    const filteredCompanies = filterCompanies(searchTerm);
    console.log("Flitered Companies:", filteredCompanies);
    currentResults = filteredCompanies;

    loading.classList.remove("show");

    if (filteredCompanies.length > 0) {
      displayCompanies(filteredCompanies, "searchPageResultsGrid");
      // resultsCount.textContent = `${filteredCompanies.length} sonuç bulundu`;
      // if(currentLanguage == 'en'){
      //   console.log(currentLanguage,'en')
      //   resultsCount.textContent = `Found ${filteredCompanies.length} Companies `;
      // } else if(currentLanguage = 'vi'){
      //   console.log(currentLanguage,'vi')
      //   resultsCount.textContent = `${filteredCompanies.length} kết quả được tìm thấy`;
      // }else{
      //   console.log(currentLanguage)
      //   resultsCount.textContent = `${filteredCompanies.length} sonuç bulundu`;
      // }
    } else {
      // noResults.style.display = "block";
      // resultsCount.textContent = "Sonuç bulunamadı";
    }
  }, 800);
}

// Filter companies based on search term and categories
function filterCompanies(searchTerm) {
  console.log(searchTerm);

  return data.filter((company) => {
    const productDesc =
      company.productDescription?.[currentLanguage] ||
      company.productDescription?.en ||
      "";

    const matchesSearch =
      !searchTerm ||
      company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      productDesc.toLowerCase().includes(searchTerm.toLowerCase());

    console.log("matchedSearch:", matchesSearch);
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(company.category);
    console.log("matchedCategory:", matchesCategory);
    return matchesSearch && matchesCategory;
  });
}

// Sort results
function sortResults() {
  const sortBy = document.getElementById("sortDropdown").value;
  let sortedResults = [...currentResults];

  switch (sortBy) {
    case "name":
      sortedResults.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "category":
      sortedResults.sort((a, b) => a.category.localeCompare(b.category));
      break;
    case "newest":
      sortedResults.sort((a, b) => b.isNew - a.isNew);
      break;
  }

  displayCompanies(sortedResults, "searchPageResultsGrid");
}

function displayCompanies(companiesToDisplay, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = companiesToDisplay
    .map((company) => {
      const lang = currentLanguage || "en";
      const description =
        company.productDescription?.[lang] || "No description.";
      const statusColor =
        company.status === "pending"
          ? "#f0ad4e"
          : company.status === "approved"
          ? "#5cb85c"
          : "#d9534f";

      return `
    <div class="company-card" onclick="openModal('${company._id}')">
      <div class="company-logo-wrapper">
        ${
          company.logo
            ? `<img src="${company.logo}" alt="${company.name}" class="company-logo" onerror="this.style.display='none'">`
            : `<div class="fallback-logo">🏢</div>`
        }
      </div>

      <div class="company-info">
        <h3 class="company-name">${company.name}</h3>
        
        

        <div class="company-meta">
          <p><strong>Contact:</strong> ${company.contact || "N/A"}</p>
          <p><strong>Email:</strong> ${company.email || "N/A"}</p>
          <p><strong>Phone:</strong> ${company.phone || "N/A"}</p>
        </div>

        <p class="company-description">${description}</p>
      </div>
    </div>
  `;
    })

    .join("");
}

// Get category name
function getCategoryName(categoryId) {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : categoryId;
}

// Load companies (initialize with sample data)
function loadCompanies() {
  companies = [...sampleCompanies];
  if (document.getElementById("search-page").classList.contains("active")) {
    performSearchPageSearch();
  }
}

// Helper function to get emoji for category
function getEmojiForCategory(category) {
  const categoryEmojis = {
    agriculture: "🌾",
    textile: "👕",
    cosmetics: "💄",
    electronics: "💻",
    furniture: "🪑",
    handicrafts: "🎨",
    jewelry: "💎",
    medical: "🏥",
    seafood: "🦐",
  };
  return categoryEmojis[category] || "🏢";
}

// function initializeSlider() {
//   const sliderTrack = document.getElementById("sliderTrack");
//   if (!sliderTrack) return;

//   const currentLang = window.currentLanguage || "en";

//   const visibleCompanies = data.filter(
//     (company) => company.status !== "pending" && company.status !== "rejected"
//   );

//   const sliderContent = visibleCompanies
//     .map((company) => {
//       const productDesc =
//         company.productDescription?.[currentLang] ||
//         company.productDescription?.en ||
//         "";

//       return `
//         <div class="slider-item" onclick="openModal('${company._id}')">
//           <div class="slider-company-card-vertical">
//             <div class="slider-logo-wrapper">
//               ${
//                 company.logo
//                   ? `<img src="${company.logo}" alt="${company.name}" class="slider-logo-img" onerror="this.style.display='none'" />`
//                   : `<div class="slider-fallback-logo">🏢</div>`
//               }
//             </div>
//             <div class="slider-info">
//               <h4 class="slider-name">${company.name}</h4>

//             </div>
//           </div>
//         </div>
//       `;
//     })
//     .join("");

//   // Duplicate content for infinite loop illusion
//   sliderTrack.innerHTML = sliderContent + sliderContent;

// }

function initializeSlider() {
  const sliderTrack = document.getElementById("sliderTrack");
  if (!sliderTrack) return;

  const currentLang = window.currentLanguage || "en";

  const visibleCompanies = data.filter(
    (company) => company.status !== "pending" && company.status !== "rejected"
  );

  // If no companies, return early
  if (visibleCompanies.length === 0) return;

  const createSliderItem = (company) => {
    const productDesc =
      company.productDescription?.[currentLang] ||
      company.productDescription?.en ||
      "";

    return `
      <div class="slider-item" onclick="openModal('${company._id}')">
        <div class="slider-company-card-vertical">
          <div class="slider-logo-wrapper">
            ${
              company.logo
                ? `<img src="${company.logo}" alt="${company.name}" class="slider-logo-img" onerror="this.style.display='none'" />`
                : `<div class="slider-fallback-logo">🏢</div>`
            }
          </div>
          <div class="slider-info">
            <h4 class="slider-name">${company.name}</h4>
          </div>
        </div>
      </div>
    `;
  };

  // Create initial content
  const sliderContent = visibleCompanies.map(createSliderItem).join("");

  // For true infinite scroll, we need enough content to fill the viewport and beyond
  // We'll create multiple copies to ensure smooth infinite scrolling
  const minCopies = Math.max(3, Math.ceil(window.innerWidth / 300)); // Ensure we have enough items
  let finalContent = "";

  for (let i = 0; i < minCopies; i++) {
    finalContent += sliderContent;
  }

  sliderTrack.innerHTML = finalContent;

  // Get all slider items for calculation
  const sliderItems = sliderTrack.querySelectorAll(".slider-item");
  const originalItemCount = visibleCompanies.length;

  if (sliderItems.length === 0) return;

  // Calculate the width of one complete set of items
  const itemWidth = sliderItems[0].offsetWidth + 16; // 16px for margin-right (1rem)
  const setWidth = itemWidth * originalItemCount;

  // Set up the animation
  let currentTranslate = 0;
  let animationId;
  const speed = 0.5; // pixels per frame (adjust for speed)
  let isPaused = false;

  function animate() {
    if (!isPaused) {
      currentTranslate -= speed;

      // When we've moved one complete set width, reset position
      if (Math.abs(currentTranslate) >= setWidth) {
        currentTranslate = 0;
      }

      sliderTrack.style.transform = `translateX(${currentTranslate}px)`;
    }

    animationId = requestAnimationFrame(animate);
  }

  // Start animation
  animate();

  // Handle hover pause/resume
  const sliderContainer = sliderTrack.parentElement;

  sliderContainer.addEventListener("mouseenter", () => {
    isPaused = true;
  });

  sliderContainer.addEventListener("mouseleave", () => {
    isPaused = false;
  });

  // Clean up function (call this if you need to destroy the slider)
  window.destroySlider = () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  };

  // Handle window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Recalculate on resize
      const newItemWidth = sliderItems[0].offsetWidth + 16;
      const newSetWidth = newItemWidth * originalItemCount;

      // Update calculations
      itemWidth = newItemWidth;
      setWidth = newSetWidth;

      // Reset position if needed
      if (Math.abs(currentTranslate) >= setWidth) {
        currentTranslate = 0;
      }
    }, 250);
  });
}

function openModal(companyId) {
  console.log("model clicked");
  const company = data.find((c) => c._id === companyId);
  if (!company) return;

  const modal = document.getElementById("companyModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  modalTitle.textContent = company.name;
  //   modalBody.innerHTML = `
  //         <div class="modal-company-details">
  //             <div class="modal-company-header">
  //                 <h3>${company.name}</h3>
  //                 <span class="modal-category-badge">${getCategoryName(
  //                   company.category
  //                 )}</span>
  //             </div>

  //             <p class="modal-description">${company.description}</p>

  //             <div class="modal-info-grid">
  //                 <div class="modal-info-item">
  //                     <strong>Konum:</strong> ${company.location}
  //                 </div>
  //                 <div class="modal-info-item">
  //                     <strong>Kuruluş Yılı:</strong> ${company.established}
  //                 </div>
  //                 <div class="modal-info-item">
  //                     <strong>E-posta:</strong> ${company.email}
  //                 </div>
  //                 <div class="modal-info-item">
  //                     <strong>Telefon:</strong> ${company.phone}
  //                 </div>
  //                 <div class="modal-info-item">
  //                     <strong>Website:</strong> <a href="http://${
  //                       company.website
  //                     }" target="_blank">${company.website}</a>
  //                 </div>
  //             </div>

  //             <div class="modal-section">
  //                 <h4>Ürünler</h4>
  //                 <div class="modal-products">
  //                     ${company.products
  //                       .map(
  //                         (product) =>
  //                           `<span class="modal-product-tag">${product}</span>`
  //                       )
  //                       .join("")}
  //                 </div>
  //             </div>

  //             <div class="modal-section">
  //                 <h4>Sertifikalar</h4>
  //                 <div class="modal-certifications">
  //                     ${company.certifications
  //                       .map(
  //                         (cert) => `<span class="modal-cert-tag">${cert}</span>`
  //                       )
  //                       .join("")}
  //                 </div>
  //             </div>
  //         </div>
  //     `;
  const currentLang = currentLanguage || "en";
  const productDesc = company.productDescription?.[currentLang] || "";

  modalBody.innerHTML = `
  <div class="modal-company-details">
    <div class="modal-header">
      <div class="modal-logo">
        ${
          company.logo
            ? `<img src="${company.logo}" alt="${company.name}" onerror="this.style.display='none'" />`
            : `<div class="fallback-logo">🏢</div>`
        }
      </div>
      <h2 class="modal-title">${company.name}</h2>
      
    </div>

    <div class="modal-section">
      <h4>Company Info</h4>
      <div class="modal-info-grid">
        <div class="modal-info-item"><strong> Contact Person:</strong> ${
          company.contact || "N/A"
        }</div>
        <div class="modal-info-item"><strong> Email:</strong> ${
          company.email || "N/A"
        }</div>
        <div class="modal-info-item"><strong> Phone:</strong> ${
          company.phone || "N/A"
        }</div>
        
      </div>
    </div>

    <div class="modal-section">
      <h4>Product Description</h4>
      <p class="modal-description">${productDesc}</p>
    </div>
  </div>
`;
  // <div class="modal-info-item"><strong> Registered:</strong> ${new Date(company.createdAt).toLocaleDateString()}</div>
  // <span class="modal-status ${company.status}">${company.status.toUpperCase()}</span>
  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("companyModal").classList.remove("active");
}

// Form handlers
// async function handleApplicationSubmit(event) {
//   event.preventDefault();
//   // const formData = new FormData(event.target);
//   // const data = Object.fromEntries(formData);

//   const form = e.target;
//   const formData = {
//     name: form.name.value,
//     email: form.email.value,
//     contact: form.contact.value,
//     phone: form.phone.value,
//     logo: form.logo.value,
//     productDescription: form.productDescription.value,
//     status: form.status.value,
//   };

//   console.log("Application submission:", data);
//      const res = await fetch("https://merv-xuhe.vercel.app/api/company", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });

//   alert(
//     "Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız."
//   );
//   event.target.reset();
//   document.getElementById("fileList").innerHTML = "";
//   closeApplicationModal();
// }

async function handleApplicationSubmit(event) {
  event.preventDefault();

  const form = event.target;

  console.log(form);

  const companyName = form.companyName.value;
  const contactPerson = form.contactPerson.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const productDescription = form.productDescription.value;
  const category = form.category.value;
  const file = form.files.files[0]; // This matches: name="files"
  let logoUrl = "";
  let logoPublicId = "";

  // Upload file using your working endpoint
  if (file) {
    const uploadFormData = new FormData();
    uploadFormData.append("file", file);

    try {
      // const response = await fetch("https://merv-xuhe.vercel.app/api/upload/cloudinary", {
      const response = await fetch(
        "https://merv-xuhe.vercel.app/api/upload/cloudinary",
        {
          method: "POST",
          body: uploadFormData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();
      const uploadData = result.data;

      logoUrl = uploadData.secure_url;
      logoPublicId = uploadData.public_id;

      console.log("Upload successful:", uploadData);
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image. Please try again.");
      return;
    }
  }

  console.log("logo url:", logoUrl);

  // Send full data to your company API
  const payload = {
    name: companyName,
    email,
    contact: contactPerson,
    phone,
    productDescription,
    logo: logoUrl,
    category,
    logoPublicId,
  };

  try {
    // const res = await fetch("https://merv-xuhe.vercel.app/api/company", {
    const res = await fetch("https://merv-xuhe.vercel.app/api/company", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error("Failed to submit company data");
    }

    alert(t("formSuccessMessage"));

    form.reset();
    document.getElementById("fileList").innerHTML = "";
    closeApplicationModal();
  } catch (err) {
    console.error("Submission error:", err);
    alert("Form gönderilirken bir hata oluştu.");
  }
}

function handleContactSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("Contact form submission:", data);

  alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
  event.target.reset();
}

function handleFileSelect(event) {
  const files = event.target.files;
  const fileList = document.getElementById("fileList");

  if (files.length > 0) {
    fileList.innerHTML = Array.from(files)
      .map(
        (file) => `<p>📎 ${file.name} (${(file.size / 1024).toFixed(1)} KB)</p>`
      )
      .join("");
  }
}

// Mobile menu toggle
// function toggleMobileMenu() {
//     const navMenu = document.getElementById('navMenu');
//     navMenu.classList.toggle('active');
// }

// Error message display function
function showErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "error-message";
  errorDiv.textContent = message;

  const main = document.querySelector("main");
  main.insertBefore(errorDiv, main.firstChild);

  setTimeout(() => {
    if (errorDiv.parentNode) {
      errorDiv.parentNode.removeChild(errorDiv);
    }
  }, 5000);
}

// Event listeners
document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const languageDropdown = document.getElementById("languageDropdown");

  // Close mobile menu
  if (
    navMenu &&
    mobileMenuBtn &&
    !navMenu.contains(event.target) &&
    !mobileMenuBtn.contains(event.target)
  ) {
    navMenu.classList.remove("active");
  }

  // Close language dropdown
  if (languageDropdown && !languageDropdown.contains(event.target)) {
    languageDropdown.classList.remove("active");
  }
});

// Add keyboard support for search
document.addEventListener("DOMContentLoaded", function () {
  const homeSearchInput = document.getElementById("homeSearchInput");
  const searchPageInput = document.getElementById("searchPageInput");

  if (homeSearchInput) {
    homeSearchInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        performHomeSearch();
      }
    });
  }

  if (searchPageInput) {
    searchPageInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        performSearchPageSearch();
      }
    });
  }
});

// Close modals when clicking outside
document.addEventListener("DOMContentLoaded", function () {
  const companyModal = document.getElementById("companyModal");
  const applicationModal = document.getElementById("applicationModal");

  if (companyModal) {
    companyModal.addEventListener("click", function (event) {
      if (event.target === this) {
        closeModal();
      }
    });
  }

  if (applicationModal) {
    applicationModal.addEventListener("click", function (event) {
      if (event.target === this) {
        closeApplicationModal();
      }
    });
  }
});

// Language support system
let currentLanguage = "en"; // Default language

// Translation object (paste your existing translations here)
const translations = {
  tr: {
    // Navigation
    categories: "Kategoriler",
    companies: "Firmalar",
    whyVietnam: "Neden Vietnam?",
    contact: "İletişim",
    joinNow: "Hemen Başvur",
    viewHotel: "Otelleri Görüntüle",
    findRequestForm: "Tedarikçi Talebi ",

    //view hotel model
    availableHotel: "Mevcut Oteller",

    //Open Find Request form/model
    findRequest: "Talep Formu",
    emailAddress: "E-posta adresi *",
    product: "Ürün *",
    quantity: "Miktar *",
    cancel: "İptal",
    submit: "Gönder",

    // Hero Section
    heroTitle: "Vietnam İş Dünyası",
    heroSubtitle: "Vietnamlı üreticileri dünya pazarlarıyla buluşturuyoruz",
    searchPlaceholder: "Şirket, ürün veya kategori ara...",

    // Categories
    categoryAgriculture: "Tarım ve Gıda",
    categoryTextile: "Giyim ve Tekstil",
    categoryCosmetics: "Kozmetik",
    categoryElectronics: "Elektronik",
    categoryFurniture: "Mobilya ve Ev Dekorasyonu",
    categoryHandicrafts: "El Sanatları",
    categoryJewelry: "Mücevher ve Aksesuar",
    categoryMedical: "Medikal ve Sağlık",
    categorySeafood: "Deniz Ürünleri",

    // Why Vietnam Section
    whyVietnamTitle: "Neden Vietnam?",
    costAdvantage: "Maliyet Avantajı",
    costAdvantageDesc:
      "Rekabetçi üretim maliyetleri ve kaliteli işgücü ile maliyet avantajı sağlayın.",
    highQuality: "Yüksek Kalite",
    highQualityDesc:
      "Uluslararası standartlarda üretim yapan fabrikalar ve kalite kontrol sistemleri.",
    strategicLocation: "Stratejik Konum",
    strategicLocationDesc:
      "Asya-Pasifik bölgesinin merkezinde, lojistik avantajları ile hızlı teslimat.",
    growingEconomy: "Büyüyen Ekonomi",
    growingEconomyDesc:
      "Hızla büyüyen ekonomi ve gelişen teknoloji altyapısı ile güvenli yatırım ortamı.",
    educatedWorkforce: "Eğitimli İşgücü",
    educatedWorkforceDesc:
      "Genç, dinamik ve eğitimli işgücü ile yenilikçi üretim çözümleri.",
    tradeAgreements: "Ticaret Anlaşmaları",
    tradeAgreementsDesc:
      "CPTPP, EVFTA gibi ticaret anlaşmaları ile gümrük avantajları.",

    // Search Page
    categoryChipsTitle: "Kategoriler",
    companySearch: "Firma Arama",
    showingResults: "sonuç bulundu",
    sortByName: "İsme göre sırala",
    sortByCategory: "Kategoriye göre sırala",
    sortByNewest: "En yeniler",
    searching: "Aranıyor...",
    noResultsFound: "Sonuç bulunamadı",
    noResultsDesc: "Arama kriterlerinizi değiştirerek tekrar deneyin.",
    clearFilters: "Filtreleri Temizle",

    // Viet7 Network
    viet7NetworkTitle: "Viet7 Ağı",
    networkSubtitle: "Firmanı listele, Viet7 Ağı'nda yerini al!",
    networkDescription:
      "Viet7 Ağı, Vietnam merkezli tedarik zincirini küresel pazarlara taşıyan dinamik bir platformdur. Asya'nın üretim gücünü, Avrupa'nın ihtiyaçlarıyla; Orta Doğu ve Afrika'nın büyüyen pazarlarıyla buluşturuyoruz.",
    joinNetwork: "Ağa Katıl",

    // Application Form
    applicationForm: "Başvuru Formu",
    companyName: "Firma Adı",
    contactPerson: "İletişim Kişisi",
    emailAddress: "E-posta Adresi",
    phoneNumber: "Telefon Numarası",
    productDescription: "Ürün Açıklaması",
    fileUpload: "Dosya/Görsel Yükleme",
    fileUploadDesc: "Dosya yüklemek için tıklayın veya sürükleyip bırakın",
    submitApplication: "Başvuruyu Gönder",
    required: "*",
    formSuccessMessage:
      "Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",

    // Footer
    contactInfo: "İletişim Bilgileri",
    allRightsReserved: "Tüm hakları saklıdır.",

    // Messages
    applicationSuccess:
      "Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
    contactSuccess:
      "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",

    // Manufacturers
    vietnameseManufacturers: "Vietnamlı Üreticiler",
  },

  en: {
    // Navigation
    categories: "Categories",
    companies: "Companies",
    whyVietnam: "Why Vietnam?",
    contact: "Contact",
    joinNow: "Join Now",
    viewHotel: "View Hotel",
    findRequestForm: "Open Find Request Form",

    //view hotel model
    availableHotel: "	Available Hotels",

    //Open Find Request form/model
    findRequest: "Find Request",
    emailAddress: "Email Address *",
    product: "Product *",
    quantity: "Quantity *",
    cancel: "Cancel",
    submit: "Submit",

    // Hero Section
    heroTitle: "Vietnam Business World",
    heroSubtitle: "Connecting Vietnamese manufacturers with global markets",
    searchPlaceholder: "Search company, product or category...",

    // Categories
    categoryAgriculture: "Agriculture & Food",
    categoryTextile: "Apparel & Textile",
    categoryCosmetics: "Cosmetics",
    categoryElectronics: "Electronics",
    categoryFurniture: "Furniture & Home Decor",
    categoryHandicrafts: "Handicrafts",
    categoryJewelry: "Jewelry & Accessories",
    categoryMedical: "Medical & Healthcare",
    categorySeafood: "Seafood",

    // Why Vietnam Section
    whyVietnamTitle: "Why Vietnam?",
    costAdvantage: "Cost Advantage",
    costAdvantageDesc:
      "Gain cost advantages with competitive production costs and quality workforce.",
    highQuality: "High Quality",
    highQualityDesc:
      "Factories producing at international standards and quality control systems.",
    strategicLocation: "Strategic Location",
    strategicLocationDesc:
      "Located in the heart of Asia-Pacific region with logistic advantages for fast delivery.",
    growingEconomy: "Growing Economy",
    growingEconomyDesc:
      "Safe investment environment with rapidly growing economy and developing technology infrastructure.",
    educatedWorkforce: "Educated Workforce",
    educatedWorkforceDesc:
      "Innovative production solutions with young, dynamic and educated workforce.",
    tradeAgreements: "Trade Agreements",
    tradeAgreementsDesc:
      "Customs advantages with trade agreements like CPTPP, EVFTA.",

    // Search Page
    categoryChipsTitle: "Categories",
    companySearch: "Company Search",
    showingResults: "Showing results",
    sortByName: "Sort by name",
    sortByCategory: "Sort by category",
    sortByNewest: "Newest first",
    searching: "Searching...",
    noResultsFound: "No results found",
    noResultsDesc: "Try changing your search criteria and search again.",
    clearFilters: "Clear Filters",

    // Viet7 Network
    viet7NetworkTitle: "Viet7 Network",
    networkSubtitle: "List your company, take your place in Viet7 Network!",
    networkDescription:
      "Viet7 Network is a dynamic platform that brings Vietnam-centered supply chain to global markets. We connect Asia's production power with Europe's needs and the growing markets of Middle East and Africa.",
    joinNetwork: "Join Network",

    // Application Form
    applicationForm: "Application Form",
    companyName: "Company Name",
    contactPerson: "Contact Person",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    productDescription: "Product Description",
    fileUpload: "File/Image Upload",
    fileUploadDesc: "Click to upload files or drag and drop",
    submitApplication: "Submit Application",
    required: "*",
    formSuccessMessage:
      "Your application has been submitted successfully! We will get back to you as soon as possible.",

    // Footer
    contactInfo: "Contact Information",
    allRightsReserved: "All rights reserved.",

    // Messages
    applicationSuccess:
      "Your application has been sent successfully! We will get back to you soon.",
    contactSuccess:
      "Your message has been sent successfully! We will get back to you soon.",

    // Manufacturers
    vietnameseManufacturers: "Vietnamese Manufacturers",
  },

  vi: {
    // Navigation
    categories: "Danh mục",
    companies: "Công ty",
    whyVietnam: "Tại sao Việt Nam?",
    contact: "Liên hệ",
    joinNow: "Tham gia ngay",
    viewHotel: "Xem khách sạn",
    findRequestForm: "Mở biểu mẫu yêu cầu tìm kiếm?",

    //Open Find Request form/model
    findRequest: "Yêu cầu tìm kiếm",
    emailAddress: "Địa chỉ email *",
    product: "Sản phẩm *",
    quantity: "Số lượng *",
    cancel: "Hủy",
    submit: "Gửi",

    //view hotel model
    availableHotel: "Khách sạn còn phòng",

    // Hero Section
    heroTitle: "Thế giới kinh doanh Việt Nam",
    heroSubtitle: "Kết nối các nhà sản xuất Việt Nam với thị trường toàn cầu",
    searchPlaceholder: "Tìm kiếm công ty, sản phẩm hoặc danh mục...",

    // Categories
    categoryAgriculture: "Nông nghiệp & Thực phẩm",
    categoryTextile: "May mặc & Dệt may",
    categoryCosmetics: "Mỹ phẩm",
    categoryElectronics: "Điện tử",
    categoryFurniture: "Nội thất & Trang trí nhà",
    categoryHandicrafts: "Thủ công mỹ nghệ",
    categoryJewelry: "Trang sức & Phụ kiện",
    categoryMedical: "Y tế & Chăm sóc sức khỏe",
    categorySeafood: "Hải sản",

    // Why Vietnam Section
    whyVietnamTitle: "Tại sao Việt Nam?",
    costAdvantage: "Lợi thế chi phí",
    costAdvantageDesc:
      "Đạt được lợi thế chi phí với chi phí sản xuất cạnh tranh và lực lượng lao động chất lượng.",
    highQuality: "Chất lượng cao",
    highQualityDesc:
      "Các nhà máy sản xuất theo tiêu chuẩn quốc tế và hệ thống kiểm soát chất lượng.",
    strategicLocation: "Vị trí chiến lược",
    strategicLocationDesc:
      "Nằm ở trung tâm khu vực Châu Á-Thái Bình Dương với lợi thế logistics để giao hàng nhanh chóng.",
    growingEconomy: "Nền kinh tế đang phát triển",
    growingEconomyDesc:
      "Môi trường đầu tư an toàn với nền kinh tế tăng trường nhanh chóng và cơ sở hạ tầng công nghệ đang phát triển.",
    educatedWorkforce: "Lực lượng lao động có trình độ",
    educatedWorkforceDesc:
      "Các giải pháp sản xuất sáng tạo với lực lượng lao động trẻ, năng động và có trình độ.",
    tradeAgreements: "Các hiệp định thương mại",
    tradeAgreementsDesc:
      "Lợi thế hải quan với các hiệp định thương mại như CPTPP, EVFTA.",

    // Search Page
    categoryChipsTitle: "Danh mục",
    companySearch: "Tìm kiếm công ty",
    showingResults: "kết quả được tìm thấy",
    sortByName: "Sắp xếp theo tên",
    sortByCategory: "Sắp xếp theo danh mục",
    sortByNewest: "Mới nhất trước",
    searching: "Đang tìm kiếm...",
    noResultsFound: "Không tìm thấy kết quả",
    noResultsDesc: "Hãy thử thay đổi tiêu chí tìm kiếm và tìm kiếm lại.",
    clearFilters: "Xóa bộ lọc",

    // Viet7 Network
    viet7NetworkTitle: "Mạng lưới Viet7",
    networkSubtitle:
      "Đăng ký công ty của bạn, có vị trí trong Mạng lưới Viet7!",
    networkDescription:
      "Mạng lưới Viet7 là một nền tảng năng động mang chuỗi cung ứng tập trung tại Việt Nam ra thị trường toàn cầu. Chúng tôi kết nối sức mạnh sản xuất của Châu Á với nhu cầu của Châu Âu và các thị trường đang phát triển ở Trung Đông và Châu Phi.",
    joinNetwork: "Tham gia mạng lưới",

    // Application Form
    applicationForm: "Mẫu đơn đăng ký",
    companyName: "Tên công ty",
    contactPerson: "Người liên hệ",
    emailAddress: "Địa chỉ email",
    phoneNumber: "Số điện thoại",
    productDescription: "Mô tả sản phẩm",
    fileUpload: "Tải lên tệp/Hình ảnh",
    fileUploadDesc: "Nhấp để tải lên tệp hoặc kéo và thả",
    submitApplication: "Gửi đơn đăng ký",
    required: "*",
    formSuccessMessage:
      "Đơn đăng ký của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",

    // Footer
    contactInfo: "Thông tin liên hệ",
    allRightsReserved: "Tất cả các quyền được bảo lưu.",

    // Messages
    applicationSuccess:
      "Đơn đăng ký của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.",
    contactSuccess:
      "Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.",

    // Manufacturers
    vietnameseManufacturers: "Các nhà sản xuất Việt Nam",
  },
};

// Language dropdown functions
function toggleLanguageDropdown() {
  const dropdown = document.getElementById("languageDropdown");
  dropdown.classList.toggle("active");
}

// Mobile language dropdown toggle function
function toggleMobileLanguageDropdown() {
  const dropdown = document.getElementById("mobileLanguageDropdown");
  dropdown.classList.toggle("active");
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("languageDropdown");
  const mobileDropdown = document.getElementById("mobileLanguageDropdown");

  // Close desktop dropdown
  if (dropdown && !dropdown.contains(event.target)) {
    dropdown.classList.remove("active");
  }

  // Close mobile dropdown
  if (mobileDropdown && !mobileDropdown.contains(event.target)) {
    mobileDropdown.classList.remove("active");
  }
});

// Main language change function
function changeLanguage(lang) {
  currentLanguage = lang;

  // Update current language display for desktop
  const currentLangSpan = document.getElementById("currentLanguage");
  const langNames = {
    tr: "TR",
    en: "EN",
    vi: "VI",
  };
  if (currentLangSpan) {
    currentLangSpan.textContent = langNames[lang];
  }

  // Update mobile current language display
  const mobileCurrentLangSpan = document.getElementById(
    "mobileCurrentLanguage"
  );
  const mobileLangNames = {
    tr: "🇹🇷 Türkçe",
    en: "🇺🇸 English",
    vi: "🇻🇳 Tiếng Việt",
  };
  if (mobileCurrentLangSpan) {
    mobileCurrentLangSpan.textContent = mobileLangNames[lang];
  }

  // Update active language option for desktop dropdown
  document
    .querySelectorAll("#languageDropdown .language-option")
    .forEach((option) => {
      option.classList.remove("active");
    });
  const desktopActiveOption = document.querySelector(
    `#languageDropdown [onclick*="changeLanguage('${lang}')"]`
  );
  if (desktopActiveOption) {
    desktopActiveOption.classList.add("active");
  }

  // Update active language option for mobile dropdown
  document
    .querySelectorAll("#mobileLanguageDropdown .language-option")
    .forEach((option) => {
      option.classList.remove("active");
    });
  const mobileActiveOption = document.querySelector(
    `#mobileLanguageDropdown [onclick*="changeLanguage('${lang}')"]`
  );
  if (mobileActiveOption) {
    mobileActiveOption.classList.add("active");
  }

  // Close both dropdowns
  document.getElementById("languageDropdown").classList.remove("active");
  document.getElementById("mobileLanguageDropdown").classList.remove("active");

  // Update all text content
  updatePageContent();

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Save language preference
  localStorage.setItem("preferredLanguage", lang);
}

// Function to get translation
function t(key) {
  return translations[currentLanguage] && translations[currentLanguage][key]
    ? translations[currentLanguage][key]
    : translations["tr"][key] || key;
}

// Update all page content
function updatePageContent() {
  // Navigation
  updateNavigation();

  //hotek model
  // updateHotelModel();

  // find request model
  updateFindRequestModalTranslations();

  // Hero section
  updateHeroSection();

  // Categories section
  updateCategoriesSection();

  // Why Vietnam section
  updateWhyVietnamSection();

  // Viet7 Network section
  updateViet7NetworkSection();

  // Search page
  updateSearchPage();

  // Application modal
  renderCategoryDropdown();
  updateApplicationModal();

  // Footer
  updateFooter();
}

// Update navigation
function updateNavigation() {
  // Desktop navigation
  const navLinks = document.querySelectorAll(".nav-menu a");
  console.log(navLinks)
  // if want to add contact then change the 3 to 4 in the if and uncomennt contact in if block for mobile and desktop navigatin both
  if (navLinks.length >= 4) {
    navLinks[0].textContent = t("categories");
    navLinks[1].textContent = t("companies");
    navLinks[2].textContent = t("whyVietnam");
    // navLinks[3].textContent = t("contact");
    // navLinks[3].textContent = t("viewHotel");
    navLinks[3].textContent = t("findRequestForm");
  }

  // Mobile navigation
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-menu a");
  if (mobileNavLinks.length >= 4) {
    console.log('open form')
    mobileNavLinks[0].textContent = t("categories");
    mobileNavLinks[1].textContent = t("companies");
    mobileNavLinks[2].textContent = t("whyVietnam");
    // mobileNavLinks[3].textContent = t("contact");
    // mobileNavLinks[3].textContent = t("viewHotel");
    mobileNavLinks[3].textContent = t("findRequestForm");
  }

  // Join Now buttons
  const joinNowBtn = document.querySelector(".join-now-btn");
  const mobileJoinNowBtn = document.querySelector(".mobile-join-now-btn");
  if (joinNowBtn) {
    joinNowBtn.textContent = t("joinNow");
  }
  if (mobileJoinNowBtn) {
    mobileJoinNowBtn.textContent = t("joinNow");
  }
}

//update hotel model
function updateHotelModel() {
  const hotelTitle = document.querySelector(".hotel-modal-title");
  if (hotelTitle) {
    hotelTitle.textContent = t("availableHotel");
  }
}

//updaet open find request form 
function updateFindRequestModalTranslations() {
  const modalTitle = document.querySelector(".prouct-modal-title");
  const emailLabel = document.querySelector("label[for='email']");
  const productLabel = document.querySelector("label[for='product']");
  const quantityLabel = document.querySelector("label[for='quantity']");
  const cancelButton = document.querySelector(".btn.btn-secondary");
  const submitButton = document.querySelector(".btn.btn-primary");

  if (modalTitle) modalTitle.textContent = t("findRequest");
  if (emailLabel) emailLabel.textContent = t("emailAddress");
  if (productLabel) productLabel.textContent = t("product");
  if (quantityLabel) quantityLabel.textContent = t("quantity");
  if (cancelButton) cancelButton.textContent = t("cancel");
  if (submitButton) {
    // Remove loading span from textContent
    const loadingSpan = submitButton.querySelector("span.loading");
    submitButton.childNodes[0].textContent = t("submit");
    if (loadingSpan) loadingSpan.textContent = "..."; // leave this static or translate if needed
  }
}

// Update hero section
function updateHeroSection() {
  const heroTitle = document.querySelector(".hero h1");
  const heroSubtitle = document.querySelector(".hero p");
  const searchInput = document.getElementById("homeSearchInput");

  if (heroTitle) heroTitle.textContent = t("heroTitle");
  if (heroSubtitle) heroSubtitle.textContent = t("heroSubtitle");
  if (searchInput) searchInput.placeholder = t("searchPlaceholder");

  // Vietnamese Manufacturers section title
  const manufacturersTitle = document.querySelector(".section-title");
  if (
    manufacturersTitle &&
    (manufacturersTitle.textContent.includes("Vietnamlı") ||
      manufacturersTitle.textContent.includes("Vietnamese") ||
      manufacturersTitle.textContent.includes("nhà sản xuất"))
  ) {
    manufacturersTitle.textContent = t("vietnameseManufacturers");
  }
}

// Update categories section
const categoryKeys = [
  "categoryAgriculture",
  "categoryTextile",
  "categoryCosmetics",
  "categoryElectronics",
  "categoryFurniture",
  "categoryHandicrafts",
  "categoryJewelry",
  "categoryMedical",
  "categorySeafood",
];
function updateCategoriesSection() {
  const categoriesTitle = document.querySelector(".categories-title");
  if (categoriesTitle) {
    categoriesTitle.textContent = t("categories");
  }

  // Update category items
  const categoryItems = document.querySelectorAll(
    ".category-item .category-name"
  );

  categoryItems.forEach((item, index) => {
    if (categoryKeys[index]) {
      item.textContent = t(categoryKeys[index]);
    }
  });
}

// Update Why Vietnam section
function updateWhyVietnamSection() {
  const whyVietnamTitle = document.querySelector("#why-vietnam .section-title");
  if (whyVietnamTitle) {
    whyVietnamTitle.textContent = t("whyVietnamTitle");
  }

  const whyVietnamCards = document.querySelectorAll(".why-vietnam-card");
  const cardData = [
    { titleKey: "costAdvantage", descKey: "costAdvantageDesc" },
    { titleKey: "highQuality", descKey: "highQualityDesc" },
    { titleKey: "strategicLocation", descKey: "strategicLocationDesc" },
    { titleKey: "growingEconomy", descKey: "growingEconomyDesc" },
    { titleKey: "educatedWorkforce", descKey: "educatedWorkforceDesc" },
    { titleKey: "tradeAgreements", descKey: "tradeAgreementsDesc" },
  ];

  whyVietnamCards.forEach((card, index) => {
    if (cardData[index]) {
      const title = card.querySelector("h3");
      const desc = card.querySelector("p");
      if (title) title.textContent = t(cardData[index].titleKey);
      if (desc) desc.textContent = t(cardData[index].descKey);
    }
  });
}

// Update Viet7 Network section
function updateViet7NetworkSection() {
  const networkTitle = document.querySelector("#viet7-network .section-title");
  const networkSubtitle = document.querySelector(".viet7-network-subtitle");
  const networkDescription = document.querySelector(
    ".viet7-network-description"
  );
  const joinNetworkBtn = document.querySelector(
    ".viet7-network-text .join-now-btn"
  );

  if (networkTitle) networkTitle.textContent = t("viet7NetworkTitle");
  if (networkSubtitle) networkSubtitle.textContent = t("networkSubtitle");
  if (networkDescription)
    networkDescription.textContent = t("networkDescription");
  if (joinNetworkBtn) joinNetworkBtn.textContent = t("joinNetwork");
}

// Update search page
// function updateSearchPage() {
//   const searchPageTitle = document.querySelector(".search-page-title");
//   const searchPageInput = document.getElementById("searchPageInput");
//   const resultsCount = document.getElementById("searchPageResultsCount");
//   const sortDropdown = document.getElementById("sortDropdown");
//   const loadingText = document.querySelector("#searchPageLoading p");
//   const noResultsTitle = document.querySelector("#searchPageNoResults h3");
//   const noResultsDesc = document.querySelector("#searchPageNoResults p");
//   const clearFiltersBtn = document.querySelector(".clear-filters-btn");

//   if (searchPageTitle) searchPageTitle.textContent = t("companySearch");
//   if (searchPageInput) searchPageInput.placeholder = t("searchPlaceholder");
//   if (resultsCount) resultsCount.textContent = t("showingResults");
//   if (loadingText) loadingText.textContent = t("searching");
//   if (noResultsTitle) noResultsTitle.textContent = t("noResultsFound");
//   if (noResultsDesc) noResultsDesc.textContent = t("noResultsDesc");
//   if (clearFiltersBtn) clearFiltersBtn.textContent = t("clearFilters");

//   // Update sort dropdown options
//   if (sortDropdown) {
//     const options = sortDropdown.querySelectorAll("option");
//     if (options.length >= 3) {
//       options[0].textContent = t("sortByName");
//       options[1].textContent = t("sortByCategory");
//       options[2].textContent = t("sortByNewest");
//     }
//   }
// }

function updateSearchPage() {
  const searchPageTitle = document.querySelector(".search-page-title");
  const searchPageInput = document.getElementById("searchPageInput");
  const resultsCount = document.getElementById("searchPageResultsCount");
  const sortDropdown = document.getElementById("sortDropdown");
  const loadingText = document.querySelector("#searchPageLoading p");
  const noResultsTitle = document.querySelector("#searchPageNoResults h3");
  const noResultsDesc = document.querySelector("#searchPageNoResults p");
  const clearFiltersBtn = document.querySelector(".clear-filters-btn");

  const chipTitle = document.querySelector(".category-chips-title");
  const chipContainer = document.getElementById("categoryChips");

  // Standard translation updates
  if (searchPageTitle) searchPageTitle.textContent = t("companySearch");
  if (searchPageInput) searchPageInput.placeholder = t("searchPlaceholder");
  if (resultsCount) resultsCount.textContent = t("showingResults");
  if (loadingText) loadingText.textContent = t("searching");
  if (noResultsTitle) noResultsTitle.textContent = t("noResultsFound");
  if (noResultsDesc) noResultsDesc.textContent = t("noResultsDesc");
  if (clearFiltersBtn) clearFiltersBtn.textContent = t("clearFilters");

  // Dropdown translation
  if (sortDropdown) {
    const options = sortDropdown.querySelectorAll("option");
    if (options.length >= 3) {
      options[0].textContent = t("sortByName");
      options[1].textContent = t("sortByCategory");
      options[2].textContent = t("sortByNewest");
    }
  }

  // Update chip title
  if (chipTitle) chipTitle.textContent = t("categoryChipsTitle");

  // Render translated category chips
  if (chipContainer) {
    console.log("Hello from chip category");
    chipContainer.innerHTML = categories
      .map(
        (category, index) => `
        <div class="category-chip" data-category="${
          category.id
        }" onclick="toggleCategoryChip('${category.id}')">
          <span class="chip-name">${t(categoryKeys[index])}</span>
          <button class="chip-remove" onclick="removeCategoryChip('${
            category.id
          }', event)">&times;</button>
        </div>
      `
      )
      .join("");
  }

  // Update only product descriptions in visible company cards
  const lang = currentLanguage || "en";
  const descriptionElements = document.querySelectorAll(".company-card");

  descriptionElements.forEach((card) => {
    console.log(card);
    const companyId = card.getAttribute("onclick")?.match(/'(.+)'/)?.[1];
    if (!companyId) return;

    const company = data.find((c) => c._id === companyId);
    if (!company) return;

    const newDescription =
      company.productDescription?.[lang] || "No description.";
    const descriptionElement = card.querySelector(".company-description");
    if (descriptionElement) {
      descriptionElement.textContent = newDescription;
    }
  });
}

// Update application modal
function updateApplicationModal() {
  const modalTitle = document.querySelector("#applicationModal .modal-title");
  const formLabels = document.querySelectorAll("#applicationModal label");
  const companyNameLabel = document.querySelector('label[for="companyName"]');
  const contactPersonLabel = document.querySelector(
    'label[for="contactPerson"]'
  );
  const emailLabel = document.querySelector('label[for="email"]');
  const phoneLabel = document.querySelector('label[for="phone"]');
  const productDescLabel = document.querySelector(
    'label[for="productDescription"]'
  );
  const fileUploadLabel =
    document.querySelector(".file-upload").previousElementSibling;
  const fileUploadText = document.querySelector(".file-upload p");
  const submitBtn = document.querySelector(".submit-btn");

  if (modalTitle) modalTitle.textContent = t("applicationForm");
  if (companyNameLabel) companyNameLabel.innerHTML = t("companyName") + " *";
  if (contactPersonLabel)
    contactPersonLabel.innerHTML = t("contactPerson") + " *";
  if (emailLabel) emailLabel.innerHTML = t("emailAddress") + " *";
  if (phoneLabel) phoneLabel.innerHTML = t("phoneNumber") + " *";
  if (productDescLabel)
    productDescLabel.innerHTML = t("productDescription") + " *";
  if (fileUploadLabel) fileUploadLabel.textContent = t("fileUpload");
  if (fileUploadText) fileUploadText.textContent = t("fileUploadDesc");
  if (submitBtn) submitBtn.textContent = t("submitApplication");
}

// Update footer
// function updateFooter() {
//   const contactInfoTitle = document.querySelector(".footer-section h3");
//   const categoriesTitle = document.querySelectorAll(".footer-section h3")[1];
//   const Categories = document.querySelectorAll(".categories");
//   const copyright = document.querySelector("footer p:last-child");

//   const html = categories
//   .map((company) => {
//     return `
//       <a onclick="navigateToCategory(${company.id})">${company.name}</a>
//     `;
//   })
//   .join("");

//   if (contactInfoTitle) contactInfoTitle.textContent = t("contactInfo");
//   if(Categories) Categories.innerHTML = html
//   if (categoriesTitle) categoriesTitle.textContent = t("categories");
//   if (copyright) {
//     copyright.innerHTML = "&copy; 2024 Viet7. " + t("allRightsReserved");
//   }
// }

function updateFooter() {
  const contactInfoTitle = document.querySelector(".footer-section h3");
  const categoriesTitle = document.querySelector(".footer-categories-title");
  const copyright = document.querySelector(".rights");

  const navLinks = document.querySelectorAll(".navigation a");
  console.log(copyright);
  // if want to add contact then change the 3 to 4 in the if and uncomennt contact in if block for mobile and desktop navigatin both
  if (navLinks.length >= 3) {
    navLinks[0].textContent = t("categories");
    navLinks[1].textContent = t("companies");
    navLinks[2].textContent = t("whyVietnam");
    // navLinks[3].textContent = t("contact");
  }

  // ✅ Apply translations to the DOM
  if (contactInfoTitle) contactInfoTitle.textContent = t("contactInfo");
  if (categoriesTitle) categoriesTitle.textContent = t("categories");

  if (copyright) {
    copyright.innerHTML = "&copy; 2025 Viet7. " + t("allRightsReserved");
  }
}

// Initialize language on page load
function initializeLanguage() {
  // Check for saved language preference
  const savedLanguage = localStorage.getItem("preferredLanguage");
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  }

  // Update page content
  updatePageContent();

  // Update desktop language dropdown display
  const currentLangSpan = document.getElementById("currentLanguage");
  const langNames = {
    tr: "TR",
    en: "EN",
    vi: "VI",
  };
  if (currentLangSpan) {
    currentLangSpan.textContent = langNames[currentLanguage];
  }

  // Update mobile language dropdown display
  const mobileCurrentLangSpan = document.getElementById(
    "mobileCurrentLanguage"
  );
  const mobileLangNames = {
    tr: "🇹🇷 Türkçe",
    en: "🇺🇸 English",
    vi: "🇻🇳 Tiếng Việt",
  };
  if (mobileCurrentLangSpan) {
    mobileCurrentLangSpan.textContent = mobileLangNames[currentLanguage];
  }

  // Update active language option for desktop
  document
    .querySelectorAll("#languageDropdown .language-option")
    .forEach((option) => {
      option.classList.remove("active");
    });
  const desktopActiveOption = document.querySelector(
    `#languageDropdown [onclick*="changeLanguage('${currentLanguage}')"]`
  );
  if (desktopActiveOption) {
    desktopActiveOption.classList.add("active");
  }

  // Update active language option for mobile
  document
    .querySelectorAll("#mobileLanguageDropdown .language-option")
    .forEach((option) => {
      option.classList.remove("active");
    });
  const mobileActiveOption = document.querySelector(
    `#mobileLanguageDropdown [onclick*="changeLanguage('${currentLanguage}')"]`
  );
  if (mobileActiveOption) {
    mobileActiveOption.classList.add("active");
  }

  // Set HTML lang attribute
  document.documentElement.lang = currentLanguage;
}

function renderCategoryDropdown() {
  const selectElement = document.getElementById("categorySelect");
  selectElement.innerHTML = categories
    .map(
      (category, index) => `
        <option value="${category.id}">
          ${t(categoryKeys[index])}
        </option>
      `
    )
    .join("");
}

// Call initialization when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeLanguage);

// Export functions for global use
window.changeLanguage = changeLanguage;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.toggleMobileLanguageDropdown = toggleMobileLanguageDropdown;
window.t = t;
