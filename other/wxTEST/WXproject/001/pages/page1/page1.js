// pages/page1/page1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 20, // 默认状态栏高度
  },
  // 跳转到直聘页面
  goToDirectHiringPage: function() {
    wx.navigateTo({
      url: '/pages/directHiringPage/directHiringPage',  // 跳转的目标页面路径
    });
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