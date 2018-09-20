// pages/HomePage/HomePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //开工打卡
  punch() {
    wx.navigateTo({
      url: "/pages/Punch/Punch",
    })
  },
  //接订单
  order() {
    wx.navigateTo({
      url: '/pages/Order/Order',
    })
  },
  //安检
  securitycheck() {
    wx.navigateTo({
      url: '/pages/SecurityCheck/SecurityCheck',
    })
  },
  //配送
  distribution() {
    wx.navigateTo({
      url: '/pages/Distribution/Distribution',
    })
  },
  //回收空瓶
  emptybottle() {
    wx.navigateTo({
      url: '/pages/EmptyBottle/EmptyBottle',
    })
  },
  //收费
  charge() {
    wx.navigateTo({
      url: '/pages/Charge/Charge',
    })
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

  }
})