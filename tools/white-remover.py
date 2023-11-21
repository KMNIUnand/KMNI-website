import cv2
import numpy as np

# Load gambar
image_path = "./res/Logo/KMNI.jpg"
img = cv2.imread(image_path)

# Ubah gambar ke format RGBA
rgba_image = cv2.cvtColor(img, cv2.COLOR_BGR2BGRA)

# Tentukan nilai alpha (transparansi) yang diinginkan (0 untuk sepenuhnya transparan)
transparent_alpha = 0

# Cari piksel dengan nilai RGB antara 128 dan 255, dan atur nilai alpha menjadi 0
mask = np.all((rgba_image[:, :, :3] >= 128) & (
    rgba_image[:, :, :3] <= 255), axis=-1)
rgba_image[mask] = [0, 0, 0, transparent_alpha]

# Simpan gambar baru dengan transparansi
output_path = "./res/Logo/output_image.png"
cv2.imwrite(output_path, rgba_image)

print("Transparansi berhasil ditambahkan pada piksel dengan nilai RGB antara 128 dan 255.")
