# 台灣各大城鎮空氣品質查詢
串接[政府資料開放平台](https://data.gov.tw/)空氣品質指標(AQI) API
標示即時 AQI / PM2.5 指數

>[空氣品質查詢](https://hedyhsuan.github.io/AQI/)

## 使用技術和第三方套件
- [Vue](https://vuejs.org/) -Function Components
- [Vue Axios](https://www.npmjs.com/package/vue-axios)  -API串接


### 頁面功能
- 進入顯示全台各城鎮空氣品質指數
- 頁面左上[ 輸入城市名稱 ]搜尋列功能，查詢城市名稱，輸入點擊後顯示該城市中各城鎮
- 或選擇區域後再選擇對應城市
- 左下方依AQI指數排序，可切換高-低排序
- [ 載入更多 ]點擊可展開/收合資料內容
- 主要頁面卡片內呈現詳細數據並依空氣品質切換城市名稱底色
- 可加入關注城市至localStorage
- 右上[關注城市]點擊可展開收藏，預設為收合
- RWD響應式



