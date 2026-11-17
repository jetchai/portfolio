// 作品集內容資料。新增作品只要改這個檔案，畫面（index.html）不用動。
// media 型別：video（src + poster）、image（src）。路徑相對於 index.html。
// draft: true 的項目會顯示「待確認」標記；DRAFT 設為 false 時全部隱藏。
window.PORTFOLIO = {
  DRAFT: true,
  person: {
    name: "翟玉泰",
    nameEn: "Chai, Yu-Tai (Jet)",
    tagline: "十五年，把現場的問題做成系統。",
    intro: "從學校營養午餐的派餐系統、手機 App 與 IoT、合夥創業，到電子製造業的 MES、資料平台與 AI 導入。我習慣先走進現場弄懂問題，再把它做成每天有人在用的系統。",
    email: "taiwan770524@gmail.com",
    github: "https://github.com/jetchai",
    stats: [
      { value: "15", unit: "年", label: "軟體開發與數位轉型" },
      { value: "10+", unit: "個", label: "為製造各部門開發的 AI 工具" },
      { value: "30+", unit: "小時", label: "企業內 AI 推廣授課" },
      { value: "7", unit: "間", label: "從零建立資訊系統的茶飲門市" }
    ]
  },
  categories: [
    { id: "ai", label: "AI 與資料" },
    { id: "mfg", label: "製造系統" },
    { id: "app", label: "App 與 IoT" },
    { id: "teach", label: "教學推廣" },
    { id: "venture", label: "創業與營運" }
  ],
  eras: [
    {
      id: "research",
      start: "2026",
      end: "",
      org: "個人研究",
      role: "報考碩士在職專班的前期驗證",
      summary: "在公開資料上先把研究題目做一次，證明做得出來，也找出傳統方法與小型 LLM 的弱點。",
      items: [
        {
          title: "製程異常偵測與 LLM 根因分析試做",
          year: "2026",
          cats: ["ai"],
          problem: "AI 給出的異常原因，要怎麼證明它是對的？資料不夠時，它知不知道自己不該回答？",
          did: [
            "在 Tennessee Eastman 公開製程資料上重現 PCA（T²／SPE）異常偵測基準：21 種故障中 9 種偵測率超過 95%，3 種幾乎偵測不到，與文獻一致",
            "以貢獻分析找原因：只看故障剛發生時能指對 5／6，看整個故障期間只剩 3／6",
            "用本機 30 億、70 億參數的小型 LLM 判斷根因：只給原始數據答對 2～3 題，加上統計證據後都答對 5 題，但每一題都自稱「高信心」，連答錯的也一樣"
          ],
          takeaway: "有引用資料不等於推論正確，答案一致也不等於答案正確。這是研讀計畫要回答的問題。",
          tech: ["Python", "PCA", "T²／SPE", "貢獻分析", "Ollama", "Qwen 2.5"],
          media: [
            { type: "image", src: "media/fault06_monitor.png", caption: "故障 6（A 進料中斷）：上方為警報指標，紅線為管制界限，虛線為故障發生時間；下方為各變數貢獻" },
            { type: "image", src: "media/fault01_monitor.png", caption: "故障 1：貢獻圖清楚指向壓力變數，但真正原因是進料比例，傳統方法也會很有把握地指錯" }
          ]
        }
      ]
    },
    {
      id: "liteon",
      start: "2021",
      end: "now",
      org: "光寶科技",
      role: "資深工程師｜數位轉型 PM → 前瞻技術部門",
      summary: "先做四年製造業數位轉型 PM，再和團隊把部門轉型為前瞻技術部門，負責 AI 推廣、資料平台與 AI 工具開發。部門分布在中國大陸、越南、台灣，常出差支援各地導入。",
      note: "因保密義務，本段不放內部畫面與數據，以架構和做法說明。",
      items: [
        {
          title: "FPY 管理看板",
          year: "2025",
          cats: ["mfg", "ai"],
          problem: "每天要花 1.5～2 小時人工整理 MES 資料，才算得出直通率、找到不良來源。",
          did: [
            "串接 MES 資料，自動完成清洗、工單配對與直通率計算",
            "可依日期、線別、機種、工單篩選，鎖定不良來源",
            "主畫面與趨勢圖共用同一套計算邏輯，避免跨日、跨線誤配"
          ],
          takeaway: "依工程單位的效益說明書，每日 1.5～2 小時的人工整理改為自動產出。",
          tech: ["MES", "資料清洗", "前端看板"],
          media: []
        },
        {
          title: "跨廠區監控管理平台",
          year: "2025",
          cats: ["mfg", "ai"],
          problem: "各廠區節點的主機、資料庫、MQTT 與事件狀態分散，沒有集中查看的地方，操作也沒有權限控管。",
          did: [
            "規劃架構並全端開發：FastAPI 後端、React／TypeScript 前端、OIDC 登入",
            "查詢採白名單 SQL，Secret 不進版控；Docker Compose 部署",
            "分階段開發，每一步都留驗收證據，並以 Playwright 自動化測試"
          ],
          takeaway: "目前監控 4 台伺服器，6 人每天使用。",
          tech: ["FastAPI", "React", "TypeScript", "OIDC", "MQTT", "Docker", "Playwright"],
          media: []
        },
        {
          title: "單位成本分析與 AI 差異分析",
          year: "2024",
          cats: ["mfg", "ai"],
          problem: "預算、預測與實際成本的差異要人工逐層往下追，例如直接人工超支時，還要對照人資資料才知道是加班還是颱風假。",
          did: [
            "上傳 CSV／Excel 後先預覽差異再套用；月資料自動彙總成季、半年、年",
            "異常追蹤看板，從會計科目一路往下找原因",
            "用 AI 協助差異統計與邏輯提醒"
          ],
          takeaway: "AI 實際用在決策支援的案例，也是研究題目的出發點。",
          tech: ["Python", "LLM", "資料彙整"],
          media: []
        },
        {
          title: "AI 推廣授課與內部 AI 工具",
          year: "2025",
          cats: ["ai", "teach"],
          problem: "AI 工具只有少數人會用，各部門不知道從哪裡開始。",
          did: [
            "約三個月、每週四天，共 30 多小時授課；推廣週 10 小時，現場 10～20 人、線上 20 多人",
            "為製造、工程、IE、品保、人資、生管等部門開發十多個 AI 效率工具",
            "例如把 HTML 和截圖還原成可編輯的 PPT、口述加模板自動產生 Prompt、廠區 3D 數位孿生"
          ],
          takeaway: "從有人會用，走向各部門每天在用。",
          tech: ["LLM", "Copilot", "影像處理", "Prompt 工作流"],
          media: []
        },
        {
          title: "新版 MES 導入與機聯網",
          year: "2021",
          cats: ["mfg"],
          problem: "300 多人的廠區要把舊產線管理系統換成新版 MES。",
          did: [
            "和 IT 一起完成導入，處理現場切換問題",
            "協助 EMS 設備管理系統開發與落地",
            "機聯網：用 MQTT 把設備資料連線傳到雲端儲存"
          ],
          takeaway: "",
          tech: ["MES", "EMS", "MQTT", "DWH"],
          media: []
        }
      ]
    },
    {
      id: "joyou",
      start: "2020",
      end: "2021",
      org: "揪你娛樂科技",
      role: "iOS 遊戲工程師",
      summary: "三人團隊開發直播視訊麻將：地圖開房、四人視訊同桌、觀眾觀戰。工作之餘參加領域驅動設計（DDD）讀書會。",
      items: []
    },
    {
      id: "tea",
      start: "2018",
      end: "2020",
      org: "珍宅茶飲（常州頂立食品）",
      role: "品牌運營資訊部主任｜四人創始團隊",
      summary: "在中國大陸從零建立茶飲品牌，展店到江蘇、成都、新疆共 7 間門市。",
      items: [
        {
          title: "茶飲品牌的全部資訊系統",
          year: "2018",
          cats: ["venture"],
          problem: "新品牌從零開始，POS、外賣、會員與行銷都要在開店前到位。",
          did: [
            "建立 POS 軟硬體、外賣平台、微信公眾號與小程序（含活動功能）、品牌網站",
            "參與產品研發、店面設計監工、加盟流程與定價；負責新店員工培訓",
            "一個月內協助一間瀕臨倒閉的門市完成整改，成為其他門市的運營範本"
          ],
          takeaway: "市場不會等你做到完美，要有目標、分階段推出。",
          tech: ["POS", "微信小程序", "外賣平台"],
          media: []
        }
      ]
    },
    {
      id: "pxtd",
      start: "2017",
      end: "2018",
      org: "麗麒科技設計",
      role: "軟體專案主管",
      summary: "與業務合夥人成立，負責專案管理與開發；這段時間補齊後端、前端與 Android，成為全端工程師。",
      items: [
        {
          title: "簡報訓練增益集（荷蘭客戶）",
          year: "2017",
          cats: ["app", "ai"],
          problem: "客戶想讓使用者在 PowerPoint 裡練習上台簡報，並得到即時回饋。",
          did: [
            "用 C# 開發 PowerPoint 增益集",
            "以攝影機辨識眼球方向，評估是否看著觀眾",
            "以語音辨識評估咬字與語速"
          ],
          takeaway: "第一次和國外客戶合作。",
          tech: ["C#", "Office 增益集", "影像辨識", "語音辨識"],
          media: []
        }
      ]
    },
    {
      id: "cju",
      start: "2016",
      end: "2016",
      org: "長榮大學",
      role: "專案助理（蕭學宏教授）、通識課外聘講師",
      summary: "VR 防災體驗與 Arduino 互動裝置，在高雄科工館與高雄展覽館展出；同時擔任通識課「創新實作與應用」講師與育成中心 3D 列印顧問。",
      items: [
        {
          title: "VR 地震防災體驗與互動裝置",
          year: "2016",
          cats: ["app", "teach"],
          problem: "讓民眾在展場親身體驗地震與防災知識。",
          did: [
            "以 Unreal Engine 4 開發 VR 地震防災體驗",
            "以 Arduino 製作九宮格投球機、腳踏車發電點亮聖誕樹、按摩椅藍牙音響"
          ],
          takeaway: "",
          tech: ["Unreal Engine 4", "VR", "Arduino"],
          media: []
        }
      ]
    },
    {
      id: "motime",
      start: "2015",
      end: "2016",
      org: "MoTime Studio",
      role: "共同創辦人",
      summary: "先和一位朋友搭檔接案，半年後三位夥伴加入，擴大成工作室；承接 3D 列印教學和軟體開發案。",
      items: [
        {
          title: "室內裝修公司的整套資訊體系",
          year: "2015",
          cats: ["venture", "app"],
          problem: "裝修公司的文件、作品與業務資料沒有系統，設計師在外也查不到資料。",
          did: [
            "從零建立文件儲存、資料庫、官網、作品展示網頁、設計師業務用 App",
            "為了讓系統貼近現場，當了三個月木工學徒，又花三個月學室內設計：丈量空屋、繪製平面圖與 3D 模擬圖、向客戶提案"
          ],
          takeaway: "「先理解現場」從一句口號變成工作習慣。",
          tech: ["資料庫", "網站", "App"],
          media: []
        },
        {
          title: "3D 列印寵物碗托高架",
          year: "2015",
          cats: ["teach"],
          draft: "年份與歸屬待確認",
          problem: "",
          did: ["自行建模並以 3D 列印製作，可拆組的寵物碗托高架"],
          takeaway: "",
          tech: ["3D 建模", "3D 列印"],
          media: [
            { type: "image", src: "media/stand_O_02_02.jpg", caption: "托高架成品" },
            { type: "image", src: "media/stand_S__18006097.jpg", caption: "斜側視角" },
            { type: "image", src: "media/stand_S__18006098.jpg", caption: "正面" },
            { type: "image", src: "media/stand_S__18006101.jpg", caption: "可拆組結構" }
          ]
        },
        {
          title: "玩轉城市：波克熊的大稻埕不思議冒險",
          year: "2016",
          cats: ["venture"],
          problem: "",
          did: ["與山中猴子創意行銷合作戶外實境解謎遊戲，負責大稻埕主題"],
          takeaway: "該公司的第一款遊戲，至今仍在販售。",
          tech: ["實境解謎", "遊戲設計"],
          media: []
        }
      ]
    },
    {
      id: "wada",
      start: "2011",
      end: "2015",
      org: "哇達創意科技",
      role: "軟體工程師 → 專案組長 → 軟體研發部主任",
      summary: "第一份工作。從 C# 派餐系統做起，轉做 iOS／Android 與軟硬整合，2013 年升專案組長、2014 年升軟體研發部主任。同時在哇達創意學院、臺南二中擔任程式設計與 3D 列印講師。",
      items: [
        {
          title: "學校營養午餐派餐系統",
          year: "2011",
          cats: ["mfg"],
          problem: "學校廚房從排菜單、算食材到下採購單都靠人工，配送時也查不到食材來源。",
          did: [
            "從菜色資料庫排菜單，依食材配方自動算出採購量並產生採購單",
            "配送用 RFID 加 PDA，到校一刷就顯示食材衛生與生產履歷"
          ],
          takeaway: "服務 7、8 所學校。系統好不好用，取決於寫程式的人有沒有先弄懂現場。",
          tech: ["C#", "RFID", "PDA"],
          media: []
        },
        {
          title: "魔方 MagicQ 藍牙燈控",
          year: "2014",
          cats: ["app"],
          problem: "",
          did: ["手機 App 透過藍牙控制燈具的色彩與亮度，搭配 3D 列印燈罩與壓克力燈"],
          takeaway: "",
          tech: ["iOS", "Android", "藍牙 BLE", "3D 列印"],
          media: [
            { type: "video", src: "media/magicq.mp4", poster: "media/magicq.jpg", caption: "觸控 App 切換燈球顏色" },
            { type: "video", src: "media/magicq2.mp4", poster: "media/magicq2.jpg", caption: "壓克力燈隨 App 變色" }
          ]
        },
        {
          title: "樹莓派 3D 印表機遠端控制",
          year: "2014",
          cats: ["app"],
          problem: "",
          did: ["用手機 App 遠端操作 3D 印表機的 X／Y／Z 軸與擠料，並串流現場影像"],
          takeaway: "",
          tech: ["Raspberry Pi", "Android", "影像串流"],
          media: [
            { type: "video", src: "media/printer3d.mp4", poster: "media/printer3d.jpg", caption: "手機控制印表機，畫面上方為即時影像" }
          ]
        },
        {
          title: "寵物防丟器",
          year: "2014",
          cats: ["app"],
          problem: "",
          did: ["以藍牙訊號強度估算寵物距離，離太遠時手機提醒"],
          takeaway: "",
          tech: ["藍牙", "Android"],
          media: [
            { type: "video", src: "media/doggywalk.mp4", poster: "media/doggywalk.jpg", caption: "依距離顯示不同色帶" }
          ]
        },
        {
          title: "3D 列印鋼珠軌道",
          year: "2014",
          cats: ["app", "teach"],
          problem: "",
          did: ["3D 列印軌道與升降機構，作為 3D 列印教學與展示作品"],
          takeaway: "",
          tech: ["3D 建模", "3D 列印", "機構"],
          media: [
            { type: "video", src: "media/balltrack.mp4", poster: "media/balltrack.jpg", caption: "鋼珠沿軌道運行" }
          ]
        },
        {
          title: "行動購物 App",
          year: "2013",
          cats: ["app"],
          problem: "",
          did: ["掃描 QR Code 瀏覽商品、加入購物車"],
          takeaway: "",
          tech: ["iOS", "QR Code"],
          media: [
            { type: "video", src: "media/mshop.mp4", poster: "media/mshop.jpg", caption: "操作示範（節錄前 60 秒）" }
          ]
        },
        {
          title: "擴增實境遊記與團隊雷達",
          year: "2014",
          cats: ["app"],
          draft: "年份與歸屬待確認",
          problem: "",
          did: ["遊記系統記錄地點、相片、筆記並以擴增實境顯示；團隊雷達顯示夥伴位置、聊天與共同遊記"],
          takeaway: "",
          tech: ["iOS", "AR", "定位"],
          media: [
            { type: "image", src: "media/ar_01.jpg", caption: "遊記系統" },
            { type: "image", src: "media/ar_02.jpg", caption: "團隊系統" }
          ]
        },
        {
          title: "其他產學合作與在地應用 App",
          year: "2012",
          cats: ["app"],
          problem: "",
          did: [
            "高雄糖廠白屋導覽 App：還能當遙控器操作現場大螢幕",
            "大樹區社區藍牙尋寶文化活動、社區 AR 尋寶（高苑科大產學合作）",
            "與南臺科大學生合作桌遊 App；中華電信路跑、佛光山書城讀書會等"
          ],
          takeaway: "",
          tech: ["iOS", "Android", "藍牙", "AR"],
          media: []
        }
      ]
    }
  ]
};
