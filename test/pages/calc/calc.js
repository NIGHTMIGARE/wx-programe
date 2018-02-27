// pages/calc/calc.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
   
    id1:"1",
    id2:"2",
    id3:"3",
    id4:"4",
    id5:"5",
    id6:"6",
    id7:"7",
    id8:"8",
    id9:"9",
    id0:"0",
    clear:"clear",
    del:"del",
    add:"+",
    minus:"-",
    multiply:"*",
    divided:"/",
    equal:"=",
    dot:".",
    operaSym:{"+":"+","-":"-","*":"*","/":"/",".":"."},
    arr:[],
    log:[],
    lastIsOperaSym:false,
    history: "略略略",
    screenData: "0",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  onTap:function(event){
    var id=event.target.id;
    console.log(id);
    if(id==this.data.del){//删除的实现
      var data=this.data.screenData;
      if(data=="0"){
        return ;
      }
      data=data.substring(0,data.length-1);//删除data数组最后一位，实现删除
      if(data==""||data=="-")
      {
        data=0;
      }
     this.setData({"screenData":data});
     this.data.arr.pop();//先前并未往arr里传值//在传数字的时候push进了数组
    }else if(id==this.data.clear){//清屏
      this.setData({"screenData":"0"});
      this.data.arr.length=0;

    }else if(id==this.data.equal){//=
      var data=this.data.screenData;
      if(data=="0"){
        return;
      }
      var lastWord=data.charAt(data.length);//判断一下末尾字符是否合法
      if(isNaN(lastWord)){
        return;
      }
      
      var arr=this.data.arr;
      var num ="";
      var optarr=[];
      //console.log(arr); //  以上没问题
      for(var i in arr){//判断小数点 连串
        if(isNaN(arr[i])== false|| arr[i]==this.data.dot){
          num = arr[i] + num;
        }else{ 
          optarr.push(num);
          optarr.push(arr[i]);
          num="";

        }
      }
      console.log(optarr);
      optarr.push(Number(num));
      var result = Number(optarr[0]) * 1.0;
      console.log(result);
     for(var i=1;i<optarr.length;i++){//跳格对数进行+-*/
       if(isNaN(optarr[i])){
        if(optarr[1]==this.data.add){
          result += Number(optarr[i+1]);
        } else if (optarr[1] == this.data.minus) {
          result -= Number(optarr[i + 1]);
        } else if (optarr[1] == this.data.multiply) {
          result *= Number(optarr[i + 1]);
        }
        else if (optarr[1] == this.data.divided) {
          result /= Number(optarr[i + 1]);
        }
       }
       
     }
     console.log(result);
     this.setData({"screenData":result+""});
     this.data.arr.length=0;
     this.data.arr.push(result);
     
     


    }else{//+-*/和数字输入
      if(this.data.operaSym[id]){
        if(this.data.lastIsOperaSym||this.data.screenData=="0"){//禁止多输入符号
          return;
        }
      }
        var sd=this.data.screenData;
        var data;
        if(sd==0){
          data=id;
        }
        else{
          data=sd+id;
        }
        this.setData({"screenData":data});
        this.data.arr.push(id);
        if(this.data.operaSym[id]) {//判断是否输入符号
          this.setData({ "lastIsOperaSym": true });
        } else {
          this.setData({ "lastIsOperaSym": false });
        }


      }


    },

  
  history:function(){
    console.log("" + "no history")  ;
    
  },})
