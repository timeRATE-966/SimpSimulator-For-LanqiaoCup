// pages/directHiringPage/directHiringPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    positionGroups: [
      ['后龙镇', '界山镇', '南浦镇', '山腰街道'],
      ['涂岭镇', '尾峰镇', '前黄镇']
    ],
    countrys:[

      {id:"1" ,name:"后龙村"},
      {id:"2" ,name:"坑仔底村"},
      {id:"3" ,name:"许厝村"},
      {id:"4" ,name:"后田村"},
      {id:"5" ,name:"上西村"},
      {id:"6" ,name:"东山村"},
      {id:"7" ,name:"峰前村"},
    ],
    recruitmentPerson:[
      {id:"1" ,name:"李大姐" ,genderIcon:"/icons/性别女.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/五星.png",rate:"5.0"},
      {id:"2" ,name:"周泽新" ,genderIcon:"/icons/性别女.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/四星.png",rate:"4.0"},
      {id:"3" ,name:"张小东" ,genderIcon:"/icons/性别男.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/3.5星.png",rate:"3.5"},
      {id:"4" ,name:"叶佳" ,genderIcon:"/icons/性别女.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/四星.png",rate:"4.0"},
      {id:"5" ,name:"杜玉杰" ,genderIcon:"/icons/性别女.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/四星.png",rate:"4.0"},
      {id:"6" ,name:"侯晓盛" ,genderIcon:"/icons/性别男.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/四星.png",rate:"4.0"},
      {id:"7" ,name:"李万凯" ,genderIcon:"/icons/性别男.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/四星.png",rate:"4.0"},
      {id:"8" ,name:"周婷星" ,genderIcon:"/icons/性别女.png " ,age:"20岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/四星.png",rate:"4.0"},
      {id:"9" ,name:"高成凯" ,genderIcon:"/icons/性别男.png " ,age:"42岁" ,job:"月嫂",  salary:"60元/小时" , rateIcon:"/icons/四星.png",rate:"4.0"},
      {id:"10" ,name:"李玉彤" ,genderIcon:"/icons/性别女.png " ,age:"42岁" ,job:"月嫂",  salary:"40元/小时" , rateIcon:"/icons/五星.png",rate:"5.0"},
      
    ]
  },                   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const windowInfo = wx.getWindowInfo();  //获取小程序窗口相关信息，并存储在windowInfo对象中
    this.setData( //使用setdata方法
      {
        statusBarHeight:windowInfo.statusBarHeight,   //格式为 需要更新的字段:新值
      }
    );
  },
  goBack() {
    wx.navigateBack(); // 返回上一页面
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})