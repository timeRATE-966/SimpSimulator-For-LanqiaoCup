// pages/page2/page2.js
Page({
  // 页面的初始数据，存储在 data 对象中
  data: {
    a: "1111",
    b:"222",
    isActive:true,
    arr1:[
      111 ,222 ,333,
    ],
    list:[
      aaa,
      bbb,
      ccc,
    ],
    arr2:[
      {
        tittle:"保洁",
        iagSrc:"/icons/fun_icon_1.png"
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 页面加载时执行
    this.add();
    
  },
  add(){
    console.log("页面开始加载");
  },
  back(){
    wx.navigateBack({
      delta:1
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    // 页面初次渲染完成时执行
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 页面显示时执行
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    // 页面隐藏时执行
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    // 页面卸载时执行
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 处理用户下拉刷新时执行
    console.log("用户执行了刷新");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 处理页面上拉触底时执行
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    // 处理用户点击右上角分享时执行
  },

  // 自定义方法，使用 ES6 方法缩写
  add() {
    // 返回一个对象
    return {
      page: "what",
      age: 20,
      sex: "男",
      skill: ["sing", "jump", "rap", "basketball"]
    };
  }
});
