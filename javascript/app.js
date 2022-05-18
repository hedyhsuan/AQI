import {createApp} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.26/vue.esm-browser.min.js"

const app =createApp({
  data() {
      return {
          data:[],
          //所有城市
          allcites:[],
          //資料中所有的城鎮
          counties:[],
          //不重覆的城鎮
          county:[],
          //Status顯示危害的城市
          warning:[],
          stared:JSON.parse(localStorage.getItem('stared')) ||  [],
          staredArea:true,
          myStared:[],
          allarea:["全區","北部","中部","南部","東部","離島"],
          cities:[],
          northCity:["基隆市","新北市","臺北市","桃園市","新竹市","新竹縣","宜蘭縣"],
          midCity:["苗栗縣","臺中市","彰化縣","南投線","雲林縣",],
          southCity:["嘉義市","臺南市","高雄市","屏東縣"],
          eastCity:["花蓮縣","臺東縣",],
          otherCity:["金門縣","連江縣","澎湖縣"],
          checkArea:"--請選擇區域--",
          checkCity:"--請選擇城市--",
          firstToggle:false,
          secToggle:false,
          
      }
  },

  methods: {
      getData(){
        const vm=this;
        const api = 'https://script.google.com/macros/s/AKfycbzl6KKgb4v2-F3SCVxVaXjnMwM_XQvnk2A08nw7NjmGfuRVmak0/exec?url=http://opendata2.epa.gov.tw/AQI.json';
        axios.get(api).then((res)=>{
            vm.data=res.data
            vm.data.forEach((item)=>{
                vm.counties.push(item.County)
                //先把所有county都抓出來
            })
            //TODO
            vm.county=vm.counties.filter((item,key,arr)=>{
                return arr.indexOf(item) === key
               //過濾重複的縣市
            })
            //顯示危害的城鎮
            vm.data.forEach((item)=>{
                if(item.Status == '危害'){
                    vm.warning.push(item)
                }
            })
            //取出關注資料
            vm.data.forEach((item1)=>{
                vm.stared.forEach((item2)=>{
                    if(item1.SiteName==item2){
                       vm.myStared.push(item1)
                    }
                })
            })
            console.log( vm.myStared)

        }) 
      },

      selectArea(area){
          //將傳入的地區儲存
          this.checkArea=area
          //關閉toggle
          this.firstToggle=false
       const expr = this.checkArea
       switch(expr){
            case "全區":
                this.checkCity="--請選擇城市--"
                this.cities=this.county
            break;
           case "北部":
               this.cities=this.northCity
               break;
           case "中部":
               this.cities=this.midCity
               break;
           case "南部":
                this.cities=this.southCity
               break;
           case "東部":
                this.cities=this.eastCity
               break;   
           case "離島":
                this.cities=this.otherCity
               break;
       }

   

      },
    switchCard(countydata){
        const vm=this;
        vm.stared=JSON.parse(localStorage.getItem('stared')) ||  []
        const index=
        vm.stared.findIndex((item)=>{
               return item==countydata.SiteName
            })
        
        if(vm.stared.indexOf(countydata.SiteName)===-1){
            vm.stared.push(countydata.SiteName)

            localStorage.setItem("stared",JSON.stringify(vm.stared))
        }else{
            vm.stared.splice(index,1)
            localStorage.setItem("stared",JSON.stringify(vm.stared))
           
        }
        vm.stared=JSON.parse(localStorage.getItem('stared')) ||  []
    },

      selectCity(city){
          this.checkCity=city
          this.secToggle=false
          

      }
      
  },
  computed:{
     
      filterData(){
          if(this.checkCity=="--請選擇城市--"){
            return this.data
          }else{
            return this.data.filter(item=>{  
             return  item.County == this.checkCity
            });
          }
      },
//TODO
      staredData(){
          let vm=this
          return vm.data.filter(function(item,index,arr){
              return vm.stared.indexOf(item.SiteName)>-1

          })
      }

 

  },
  

  created() {
      this.getData()
  },

});



app.component('card',{
    template:"#card",
    props:['selectinfo','star'],
    methods: {
 setIcon(){
     this.$emit("setFocus",this.selectinfo)
     
 }
        
    },
    computed:{
        statusCheck:function(){
            if (this.selectinfo.Status == '普通') {
                return 'aqi2';
              } else if (this.selectinfo.Status == '對敏感族群不健康') {
                return 'aqi3';
              } else if (this.selectinfo.Status == '對所有族群不健康') {
                return 'aqi4';
              } else if (this.selectinfo.Status == '非常不健康') {
                return 'aqi5';
              } else if (this.selectinfo.Status == '危害') {
                return 'aqi6';
              } else if (this.selectinfo.Status == '良好'){
                return 'aqi1'
              }

        },
        markIcon:function(){
            if(this.star.indexOf(this.selectinfo.SiteName)=== -1){
                return "fa-regular fa-bookmark"
            }else{
                return "fa-solid fa-bookmark"
            }
        }

    },
    
    created() {
       
    },
})

app.mount('#app')