"""把 index.html（Artifact 格式，沒有 <html>/<head> 外框）打包成 GitHub Pages 用的完整網頁，輸出到 docs/。

用法：python build.py
GitHub Pages 設定為 main 分支的 /docs 資料夾。
"""
import shutil
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "docs"

HEAD = """<!doctype html>
<html lang="zh-Hant">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="翟玉泰作品集：2011–2026 從派餐系統、App 與 IoT、合夥創業，到製造業資料平台與 AI 導入。">
<style>:root{color-scheme:light;padding-top:env(safe-area-inset-top);padding-bottom:env(safe-area-inset-bottom)}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style>
"""


def main():
    src = (ROOT / "index.html").read_text(encoding="utf-8")
    # <title>、<meta>、<link>、<style> 放進 head，其餘放進 body
    cut = src.index("</style>") + len("</style>")
    html = HEAD + src[:cut] + "\n</head>\n<body>\n" + src[cut:] + "\n</body>\n</html>\n"
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir()
    (OUT / "index.html").write_text(html, encoding="utf-8")
    (OUT / ".nojekyll").write_text("", encoding="utf-8")
    shutil.copy2(ROOT / "content.js", OUT / "content.js")
    shutil.copytree(ROOT / "media", OUT / "media")
    print(f"已輸出 {OUT}")


if __name__ == "__main__":
    main()
