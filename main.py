# Copy this into VS Code
def load_captions(caption_file):
    captions = {}
    try:
        with open(caption_file, 'r') as f:
            next(f)  # Skip header
            for line in f:
                tokens = line.strip().split(',', 1)
                if len(tokens) < 2:
                    continue
                image_id, caption = tokens[0], tokens[1]
                if image_id.endswith('.jpg'):
                    if image_id not in captions:
                        captions[image_id] = []
                    captions[image_id].append(caption.strip())
    except FileNotFoundError:
        print(f"Error: Caption file {caption_file} not found.")
    return captions

caption_file = '/content/captions.txt'
captions = load_captions(caption_file)