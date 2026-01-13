import os
from PIL import Image

# 원본 이미지 폴더
input_folder = "E:/images"
# 섬네일 저장 폴더
output_folder = "E:/thumbnails"

# 저장 폴더 없으면 생성
os.makedirs(output_folder, exist_ok=True)

# 폴더 안의 모든 이미지 파일 반복 처리
for filename in os.listdir(input_folder):
    if filename.lower().endswith((".jpg", ".jpeg", ".png", ".gif")):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path)

        # 비율 유지하면서 200x200 안에 맞게 줄이기
        img.thumbnail((200, 200))

        # 결과 저장
        thumb_path = os.path.join(output_folder, f"thumb_{filename}")
        img.save(thumb_path)

        print(f"{filename} → {thumb_path} 변환 완료")
