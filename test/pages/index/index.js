//index.js
//获取应用实例
const app = getApp()
Page({

  onLoad: function (options) {
    console.log("--------onLoading---------")
  },
  onReady:function(){
    console.log("---------onReady----------")
  },
  onShow:function(){
    console.log("---------onShow-----------")
  },
  onHide:function(){
    console.log("---------onHide------------")
  },
  onUnload:function(){
    console.log("---------onUnload----------")
  },
  btnclick:function(e){
    var random=Math.round(Math.random()*2);
    this.setData({computer:random})
    console.log(e.target.dataset.choose)
    this.setData({my:e.target.dataset.choose})

  },
tapName:function(){
  wx.navigateTo({
    url: '../calc/calc',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
  
})