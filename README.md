# 硬碟資產選購站

**HDD Sale Catalog** — 二手硬碟健康履歷、品項比較與詢價清單。

## 專案原則

- Notion 硬碟資產資料庫是內部盤點來源，網站只負責展示、篩選、比較與產生詢價清單。
- 硬碟筆數必須由資料來源動態決定，不得寫死為 18 顆。
- 18 顆是目前已匯入的初始資料；後續新增 24 顆或更多硬碟時，不應需要修改前端的固定筆數或版面邏輯。
- 公開展示只使用核准的公開欄位；對外不顯示 Notion 連結，檢測報告與截圖統一導向 Google Drive。
- C／D 級硬碟獨立呈現，預設不加入詢價清單。
- 網站定位為詢價單，不提供線上付款，也不直接承諾庫存、成交價、保固或交付方式。

## 預計功能

- 依品牌、容量與健康分級篩選。
- 顯示照片、SMART 摘要、DriveDx 證據與建議用途。
- 勾選多顆硬碟並即時計算參考小計。
- 產生可複製的選購／詢價文字。

## 公開部署

- 公開網址：[GitHub Pages](https://0xImwhatIm.github.io/hdd-sale-catalog/)。
- `.github/workflows/deploy-pages.yml` 會在 `master` 更新時建置純靜態頁面並發布到 GitHub Pages。
- GitHub Pages 版使用 `/hdd-sale-catalog/` 專案路徑；不需要 GPT 登入即可對外瀏覽。

## 資料來源與維護

- Notion 主資料庫：[硬碟資產資料庫](https://app.notion.com/p/9e78ea10c0a84a168643450329461d8c?v=037782b8ba6348c891aed8680cb3f7ab&source=copy_link)。
- Notion 索引頁：[硬碟檢測索引](https://app.notion.com/p/3bddffffcd80812f864dfe1fcff29e5a?source=copy_link)。
- Google Drive 固定證據資料夾：[照片與 DriveDx 原始檔](https://drive.google.com/drive/folders/1TugJHh-sImRgufQYZ9kWZRaG59p75mHN?usp=sharing)。
- 網站目前使用 `app/data/catalog.ts` 的同步快照；新增硬碟時只需更新資料快照並重新建置／部署，前端篩選、分級、統計與詢價清單會依陣列長度自動延伸。
- 對外只顯示序號末四碼；完整序號與原始報告仍保留在受控的資料來源中。
