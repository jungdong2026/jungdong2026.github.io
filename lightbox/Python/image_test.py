from PIL import Image

# 이미지 열기
img = Image.open("Img_1372.jpg")

# 크기 줄이기
resized = img.resize((200, 200))
resized.save("resized.jpg")

# 흑백 변환
gray = img.convert("L")
gray.save("gray.jpg")
