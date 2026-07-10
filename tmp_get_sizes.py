from PIL import Image
from pathlib import Path
for rel in ['proyecto-01/01.jpg', 'proyecto-02/01.jpg']:
    p = Path(rel)
    with Image.open(p) as img:
        print(f'{rel}: {img.width}x{img.height}')
