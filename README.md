# 翟玉泰作品集（網頁版）

時間軸形式的作品集，純靜態網頁，不需要後端。

- 線上網址：https://jetchai.github.io/portfolio/
- 預覽（私人）：https://claude.ai/artifact/CvCcb49jcq2vzW9Ze7sLEC

## 檔案

| 檔案 | 用途 |
|---|---|
| `content.js` | **所有內容**：個人資料、時期、作品、圖片與影片。新增作品只改這裡 |
| `index.html` | 畫面與互動（Artifact 格式，沒有 html/head 外框） |
| `media/` | 壓縮過的影片（640px、無聲、H.264）與圖片 |
| `build.py` | 打包成完整網頁輸出到 `docs/`，GitHub Pages 從 `docs/` 發佈 |

## 更新流程

1. 改 `content.js`（新素材放 `media/`）
2. `python build.py`
3. commit、push 到 `main`，約 1 分鐘後網址更新

`content.js` 的 `DRAFT: true` 會顯示「草稿版」提示和「待確認／待補素材」標記；定稿後改成 `false`。

## 影片壓縮指令（ffmpeg 來自 DevShared `tools/ffmpeg`）

```bash
ffmpeg -t 60 -i 原始.mp4 -an -vf "scale='if(gt(iw,ih),min(640,iw),-2)':'if(gt(iw,ih),-2,min(640,ih))'" -c:v libx264 -crf 30 -preset slow -pix_fmt yuv420p -movflags +faststart media/名稱.mp4
ffmpeg -ss 20 -i 原始.mp4 -frames:v 1 -q:v 4 media/名稱.jpg
```
