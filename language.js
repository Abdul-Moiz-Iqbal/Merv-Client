// Language support system
let currentLanguage = 'en'; // Default language

// Translation object (paste your existing translations here)
const translations = {
    tr: {
        // Navigation
        categories: "Kategoriler",
        companies: "Firmalar",
        whyVietnam: "Neden Vietnam?",
        contact: "İletişim",
        joinNow: "Hemen Başvur",
        
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
        costAdvantageDesc: "Rekabetçi üretim maliyetleri ve kaliteli işgücü ile maliyet avantajı sağlayın.",
        highQuality: "Yüksek Kalite",
        highQualityDesc: "Uluslararası standartlarda üretim yapan fabrikalar ve kalite kontrol sistemleri.",
        strategicLocation: "Stratejik Konum",
        strategicLocationDesc: "Asya-Pasifik bölgesinin merkezinde, lojistik avantajları ile hızlı teslimat.",
        growingEconomy: "Büyüyen Ekonomi",
        growingEconomyDesc: "Hızla büyüyen ekonomi ve gelişen teknoloji altyapısı ile güvenli yatırım ortamı.",
        educatedWorkforce: "Eğitimli İşgücü",
        educatedWorkforceDesc: "Genç, dinamik ve eğitimli işgücü ile yenilikçi üretim çözümleri.",
        tradeAgreements: "Ticaret Anlaşmaları",
        tradeAgreementsDesc: "CPTPP, EVFTA gibi ticaret anlaşmaları ile gümrük avantajları.",
        
        // Search Page
        companySearch: "Firma Arama",
        showingResults: "Sonuçlar gösteriliyor",
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
        networkDescription: "Viet7 Ağı, Vietnam merkezli tedarik zincirini küresel pazarlara taşıyan dinamik bir platformdur. Asya'nın üretim gücünü, Avrupa'nın ihtiyaçlarıyla; Orta Doğu ve Afrika'nın büyüyen pazarlarıyla buluşturuyoruz.",
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
        
        // Footer
        contactInfo: "İletişim Bilgileri",
        allRightsReserved: "Tüm hakları saklıdır.",
        
        // Messages
        applicationSuccess: "Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
        contactSuccess: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
        
        // Manufacturers
        vietnameseManufacturers: "Vietnamlı Üreticiler"
    },
    
    en: {
        // Navigation
        categories: "Categories",
        companies: "Companies",
        whyVietnam: "Why Vietnam?",
        contact: "Contact",
        joinNow: "Join Now",
        
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
        costAdvantageDesc: "Gain cost advantages with competitive production costs and quality workforce.",
        highQuality: "High Quality",
        highQualityDesc: "Factories producing at international standards and quality control systems.",
        strategicLocation: "Strategic Location",
        strategicLocationDesc: "Located in the heart of Asia-Pacific region with logistic advantages for fast delivery.",
        growingEconomy: "Growing Economy",
        growingEconomyDesc: "Safe investment environment with rapidly growing economy and developing technology infrastructure.",
        educatedWorkforce: "Educated Workforce",
        educatedWorkforceDesc: "Innovative production solutions with young, dynamic and educated workforce.",
        tradeAgreements: "Trade Agreements",
        tradeAgreementsDesc: "Customs advantages with trade agreements like CPTPP, EVFTA.",
        
        // Search Page
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
        networkDescription: "Viet7 Network is a dynamic platform that brings Vietnam-centered supply chain to global markets. We connect Asia's production power with Europe's needs and the growing markets of Middle East and Africa.",
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
        
        // Footer
        contactInfo: "Contact Information",
        allRightsReserved: "All rights reserved.",
        
        // Messages
        applicationSuccess: "Your application has been sent successfully! We will get back to you soon.",
        contactSuccess: "Your message has been sent successfully! We will get back to you soon.",
        
        // Manufacturers
        vietnameseManufacturers: "Vietnamese Manufacturers"
    },
    
    vi: {
        // Navigation
        categories: "Danh mục",
        companies: "Công ty",
        whyVietnam: "Tại sao Việt Nam?",
        contact: "Liên hệ",
        joinNow: "Tham gia ngay",
        
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
        costAdvantageDesc: "Đạt được lợi thế chi phí với chi phí sản xuất cạnh tranh và lực lượng lao động chất lượng.",
        highQuality: "Chất lượng cao",
        highQualityDesc: "Các nhà máy sản xuất theo tiêu chuẩn quốc tế và hệ thống kiểm soát chất lượng.",
        strategicLocation: "Vị trí chiến lược",
        strategicLocationDesc: "Nằm ở trung tâm khu vực Châu Á-Thái Bình Dương với lợi thế logistics để giao hàng nhanh chóng.",
        growingEconomy: "Nền kinh tế đang phát triển",
        growingEconomyDesc: "Môi trường đầu tư an toàn với nền kinh tế tăng trường nhanh chóng và cơ sở hạ tầng công nghệ đang phát triển.",
        educatedWorkforce: "Lực lượng lao động có trình độ",
        educatedWorkforceDesc: "Các giải pháp sản xuất sáng tạo với lực lượng lao động trẻ, năng động và có trình độ.",
        tradeAgreements: "Các hiệp định thương mại",
        tradeAgreementsDesc: "Lợi thế hải quan với các hiệp định thương mại như CPTPP, EVFTA.",
        
        // Search Page
        companySearch: "Tìm kiếm công ty",
        showingResults: "Hiển thị kết quả",
        sortByName: "Sắp xếp theo tên",
        sortByCategory: "Sắp xếp theo danh mục",
        sortByNewest: "Mới nhất trước",
        searching: "Đang tìm kiếm...",
        noResultsFound: "Không tìm thấy kết quả",
        noResultsDesc: "Hãy thử thay đổi tiêu chí tìm kiếm và tìm kiếm lại.",
        clearFilters: "Xóa bộ lọc",
        
        // Viet7 Network
        viet7NetworkTitle: "Mạng lưới Viet7",
        networkSubtitle: "Đăng ký công ty của bạn, có vị trí trong Mạng lưới Viet7!",
        networkDescription: "Mạng lưới Viet7 là một nền tảng năng động mang chuỗi cung ứng tập trung tại Việt Nam ra thị trường toàn cầu. Chúng tôi kết nối sức mạnh sản xuất của Châu Á với nhu cầu của Châu Âu và các thị trường đang phát triển ở Trung Đông và Châu Phi.",
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
        
        // Footer
        contactInfo: "Thông tin liên hệ",
        allRightsReserved: "Tất cả các quyền được bảo lưu.",
        
        // Messages
        applicationSuccess: "Đơn đăng ký của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.",
        contactSuccess: "Tin nhắn của bạn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.",
        
        // Manufacturers
        vietnameseManufacturers: "Các nhà sản xuất Việt Nam"
    }
};

// Language dropdown functions
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('languageDropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('languageDropdown');
    if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Main language change function
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update current language display
    const currentLangSpan = document.getElementById('currentLanguage');
    const langNames = {
        'tr': 'TR',
        'en': 'EN',
        'vi': 'VI'
    };
    currentLangSpan.textContent = langNames[lang];
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
    });
    document.querySelector(`[onclick="changeLanguage('${lang}')"]`).classList.add('active');
    
    // Close dropdown
    document.getElementById('languageDropdown').classList.remove('active');
    
    // Update all text content
    updatePageContent();
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}

// Function to get translation
function t(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] 
        ? translations[currentLanguage][key] 
        : translations['tr'][key] || key;
}

// Update all page content
function updatePageContent() {
    // Navigation
    updateNavigation();
    
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
    updateApplicationModal();
    
    // Footer
    updateFooter();
}

// Update navigation
function updateNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    if (navLinks.length >= 4) {
        navLinks[0].textContent = t('categories');
        navLinks[1].textContent = t('companies');
        navLinks[2].textContent = t('whyVietnam');
        navLinks[3].textContent = t('contact');
    }
    
    // Join Now button
    const joinNowBtn = document.querySelector('.join-now-btn');
    if (joinNowBtn) {
        joinNowBtn.textContent = t('joinNow');
    }
}

// Update hero section
function updateHeroSection() {
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');
    const searchInput = document.getElementById('homeSearchInput');
    
    if (heroTitle) heroTitle.textContent = t('heroTitle');
    if (heroSubtitle) heroSubtitle.textContent = t('heroSubtitle');
    if (searchInput) searchInput.placeholder = t('searchPlaceholder');
    
    // Vietnamese Manufacturers section title
    const manufacturersTitle = document.querySelector('.section-title');
    if (manufacturersTitle && manufacturersTitle.textContent.includes('Vietnamlı') || 
        manufacturersTitle.textContent.includes('Vietnamese') || 
        manufacturersTitle.textContent.includes('nhà sản xuất')) {
        manufacturersTitle.textContent = t('vietnameseManufacturers');
    }
}

// Update categories section
function updateCategoriesSection() {
    const categoriesTitle = document.querySelector('.categories-title');
    if (categoriesTitle) {
        categoriesTitle.textContent = t('categories');
    }
    
    // Update category items
    const categoryItems = document.querySelectorAll('.category-item .category-name');
    const categoryKeys = [
        'categoryAgriculture', 'categoryTextile', 'categoryCosmetics', 
        'categoryElectronics', 'categoryFurniture', 'categoryHandicrafts',
        'categoryJewelry', 'categoryMedical', 'categorySeafood'
    ];
    
    categoryItems.forEach((item, index) => {
        if (categoryKeys[index]) {
            item.textContent = t(categoryKeys[index]);
        }
    });
}

// Update Why Vietnam section
function updateWhyVietnamSection() {
    const whyVietnamTitle = document.querySelector('#why-vietnam .section-title');
    if (whyVietnamTitle) {
        whyVietnamTitle.textContent = t('whyVietnamTitle');
    }
    
    const whyVietnamCards = document.querySelectorAll('.why-vietnam-card');
    const cardData = [
        { titleKey: 'costAdvantage', descKey: 'costAdvantageDesc' },
        { titleKey: 'highQuality', descKey: 'highQualityDesc' },
        { titleKey: 'strategicLocation', descKey: 'strategicLocationDesc' },
        { titleKey: 'growingEconomy', descKey: 'growingEconomyDesc' },
        { titleKey: 'educatedWorkforce', descKey: 'educatedWorkforceDesc' },
        { titleKey: 'tradeAgreements', descKey: 'tradeAgreementsDesc' }
    ];
    
    whyVietnamCards.forEach((card, index) => {
        if (cardData[index]) {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            if (title) title.textContent = t(cardData[index].titleKey);
            if (desc) desc.textContent = t(cardData[index].descKey);
        }
    });
}

// Update Viet7 Network section
function updateViet7NetworkSection() {
    const networkTitle = document.querySelector('#viet7-network .section-title');
    const networkSubtitle = document.querySelector('.viet7-network-subtitle');
    const networkDescription = document.querySelector('.viet7-network-description');
    const joinNetworkBtn = document.querySelector('.viet7-network-text .join-now-btn');
    
    if (networkTitle) networkTitle.textContent = t('viet7NetworkTitle');
    if (networkSubtitle) networkSubtitle.textContent = t('networkSubtitle');
    if (networkDescription) networkDescription.textContent = t('networkDescription');
    if (joinNetworkBtn) joinNetworkBtn.textContent = t('joinNetwork');
}

// Update search page
function updateSearchPage() {
    const searchPageTitle = document.querySelector('.search-page-title');
    const searchPageInput = document.getElementById('searchPageInput');
    const resultsCount = document.getElementById('searchPageResultsCount');
    const sortDropdown = document.getElementById('sortDropdown');
    const loadingText = document.querySelector('#searchPageLoading p');
    const noResultsTitle = document.querySelector('#searchPageNoResults h3');
    const noResultsDesc = document.querySelector('#searchPageNoResults p');
    const clearFiltersBtn = document.querySelector('.clear-filters-btn');
    
    if (searchPageTitle) searchPageTitle.textContent = t('companySearch');
    if (searchPageInput) searchPageInput.placeholder = t('searchPlaceholder');
    if (resultsCount) resultsCount.textContent = t('showingResults');
    if (loadingText) loadingText.textContent = t('searching');
    if (noResultsTitle) noResultsTitle.textContent = t('noResultsFound');
    if (noResultsDesc) noResultsDesc.textContent = t('noResultsDesc');
    if (clearFiltersBtn) clearFiltersBtn.textContent = t('clearFilters');
    
    // Update sort dropdown options
    if (sortDropdown) {
        const options = sortDropdown.querySelectorAll('option');
        if (options.length >= 3) {
            options[0].textContent = t('sortByName');
            options[1].textContent = t('sortByCategory');
            options[2].textContent = t('sortByNewest');
        }
    }
}

// Update application modal
function updateApplicationModal() {
    const modalTitle = document.querySelector('#applicationModal .modal-title');
    const formLabels = document.querySelectorAll('#applicationModal label');
    const companyNameLabel = document.querySelector('label[for="companyName"]');
    const contactPersonLabel = document.querySelector('label[for="contactPerson"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const phoneLabel = document.querySelector('label[for="phone"]');
    const productDescLabel = document.querySelector('label[for="productDescription"]');
    const fileUploadLabel = document.querySelector('.file-upload').previousElementSibling;
    const fileUploadText = document.querySelector('.file-upload p');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (modalTitle) modalTitle.textContent = t('applicationForm');
    if (companyNameLabel) companyNameLabel.innerHTML = t('companyName') + ' *';
    if (contactPersonLabel) contactPersonLabel.innerHTML = t('contactPerson') + ' *';
    if (emailLabel) emailLabel.innerHTML = t('emailAddress') + ' *';
    if (phoneLabel) phoneLabel.innerHTML = t('phoneNumber') + ' *';
    if (productDescLabel) productDescLabel.innerHTML = t('productDescription') + ' *';
    if (fileUploadLabel) fileUploadLabel.textContent = t('fileUpload');
    if (fileUploadText) fileUploadText.textContent = t('fileUploadDesc');
    if (submitBtn) submitBtn.textContent = t('submitApplication');
}

// Update footer
function updateFooter() {
    const contactInfoTitle = document.querySelector('.footer-section h3');
    const categoriesTitle = document.querySelectorAll('.footer-section h3')[1];
    const copyright = document.querySelector('footer p:last-child');
    
    if (contactInfoTitle) contactInfoTitle.textContent = t('contactInfo');
    if (categoriesTitle) categoriesTitle.textContent = t('categories');
    if (copyright) {
        copyright.innerHTML = '&copy; 2024 Viet7. ' + t('allRightsReserved');
    }
}

// Initialize language on page load
function initializeLanguage() {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Update page content
    updatePageContent();
    
    // Update language dropdown display
    const currentLangSpan = document.getElementById('currentLanguage');
    const langNames = {
        'tr': 'TR',
        'en': 'EN',
        'vi': 'VI'
    };
    if (currentLangSpan) {
        currentLangSpan.textContent = langNames[currentLanguage];
    }
    
    // Update active language option
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
    });
    const activeOption = document.querySelector(`[onclick="changeLanguage('${currentLanguage}')"]`);
    if (activeOption) {
        activeOption.classList.add('active');
    }
    
    // Set HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Call initialization when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeLanguage);

// Export functions for global use
window.changeLanguage = changeLanguage;
window.toggleLanguageDropdown = toggleLanguageDropdown;
window.t = t;