# 台灣各大城鎮空氣品質查詢
串接[政府資料開放平台](https://data.gov.tw/)空氣品質指標(AQI) API
標示即時 AQI / PM2.5 指數

>[空氣品質查詢](https://hedyhsuan.github.io/AQI/)

## 使用技術和第三方套件
- [Vue](https://vuejs.org/) -Function Components
- [Vue Axios](https://www.npmjs.com/package/vue-axios)  -API串接


### 5/20修改及新增內容
- 卡片內容微調，卡片左方AQI數據加底色以分別區塊
- 卡片右上角書籤圖示，點擊可加入關注
- 頁面右上方[ 關注城鎮 ]點擊可展開/收合加入關注的城市，考量頁面的簡潔性，預設為收合
- 頁面左上[ 輸入城市名稱 ]搜尋列功能，查詢城市名稱，輸入點擊後顯示該城市中各城鎮
- 頁面左上[ 請選擇區域 ]，點擊後將該區域城市過濾至下方選單[ 請選擇城市 ]，再點擊後顯示該城市各城鎮
- [ AQI指數排行 ]將各城鎮依AQI指數做排行，點擊可轉換升降冪
- [ 載入更多 ]點擊可展開/收合資料內容
- RWD響應式


