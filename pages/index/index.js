//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    experssNu:null,
    experssInfo:null,
    tm_data:null,
    da_data:null,
    showView: false
    
    // hasUserInfo: false,
    // canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    qq.navigateTo({
      url: '../logs/logs'
    })
  },


  btnClick: function(){
    //console.log(this.data.experssNu)this.data.experssNu
    var thispage = this;
    if(this.data.experssNu!=null){
      console.log(this.data.showView)
      thispage.setData({showView:true})
      app.getquestion(this.data.experssNu,function(data){
        console.log(data)
        if(data.code==200)
          thispage.setData({experssInfo:data,tm_data:data.tm,da_data:data.da})
        else if(data.code==0)
          thispage.setData({experssInfo:data.msg,tm_data:data.msg,da_data:null})
          else
            thispage.setData({experssInfo:"err 请联系jiuyi8@qq.com处理",tm_data:"err 请联系jiuyi8@qq.com处理",da_data:null})
        //document.getElementById("xs").value=experssInf;
      })
    }
  },
   input:function(e){
    this.setData({experssNu:e.detail.value})
  },

//input触发事件
  cfinput:function(e){
    var that = this;  
    //this.setData({experssNu:data})
    qq.getClipboardData({
    success(res) {
      //console.log(res.data)
      that.setData({experssNu:res.data})
     // console.log(that.data.experssNu)
    }
  })
  },
//一键复制
   copyBtn: function (e) {
    var that = this;
    qq.setClipboardData({
      data:this.data.da_data,
      success(res) {
        qq.getClipboardData({
          success(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },


  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      qq.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
