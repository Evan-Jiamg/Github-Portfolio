# 姜明志 Evan Chiang — GitHub 個人作品集

> React 期末專題｜國立陽明交通大學 資訊管理與財務金融學系

**Online Demo (Vercel)**：https://github-portfolio-snowy.vercel.app/

---

## 專題設計目的

打造一個動態的個人作品集網站，透過串接 GitHub API 自動載入所有公開 repo，
取代靜態的自我介紹頁面，讓作品集隨著 GitHub 更新而即時同步。

---

## 功能介紹

### 關於我（首頁 `/`）
- 個人頭像、姓名、學校、自我介紹
- 技術標籤列
- 研究經歷區塊（H-COG 研究、實習準備、Tech Stack）

### 我的作品集（`/projects`）
- 透過 **GitHub API** 動態抓取所有公開 repo
- **關鍵字搜尋**：即時過濾 repo 名稱
- **語言篩選**：依程式語言分類
- **錯誤處理**：載入中、API 錯誤、空資料三種狀態
- 點擊卡片直接跳轉至 GitHub repo 頁面

---

## 專案結構

src/
├── components/
│   ├── layout/
│   │   └── Navbar.jsx        # 導覽列
│   ├── profile/
│   │   └── ProfileHero.jsx   # 個人介紹區塊
│   └── projects/
│       ├── ProjectGrid.jsx   # 作品集主體
│       ├── ProjectCard.jsx   # 單一 repo 卡片
│       └── ProjectFilter.jsx # 語言篩選列
├── hooks/
│   └── useGitHubRepos.js     # Custom Hook：抓 GitHub API
├── constants/
│   └── projectDescriptions.js # 各 repo 的中文說明
└── pages/
├── HomePage.jsx           # 首頁
└── ProjectsPage.jsx       # 作品集頁面

---

## React 技術對應

| 評分項目 | 實作方式 |
|----------|----------|
| Component 拆分 | 7 個獨立 component，各自負責不同功能 |
| Props 傳遞 | ProjectGrid → ProjectCard、ProjectFilter |
| useState | 搜尋關鍵字、語言篩選狀態 |
| useEffect | 元件掛載時呼叫 GitHub API |
| Custom Hook | `useGitHubRepos`：封裝 API 邏輯 |
| React Router | BrowserRouter、Routes、NavLink |
| 錯誤處理 | 載入中／錯誤／空資料三種狀態 |
