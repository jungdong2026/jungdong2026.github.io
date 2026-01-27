@echo off
cd Nikon810
for %%f in (*.mp4) do (
  ffmpeg -i "%%f" -vcodec libx265 -crf 28 "compressed_%%f"
)
