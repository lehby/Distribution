// pages/NewSingleDetails/NewSingleDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    table:[{name:"液化气大瓶",heavy:"40",price:"500",quantity:"3"},
      { name: "液化气大瓶", heavy: "40", price: "500", quantity: "3" },
      { name: "液化气大瓶", heavy: "40", price: "500", quantity: "3" }]
  },
// 关闭当前页，反回上一页

  order:function(){
    wx.redirectTo({
      url:"/pages/Order/Order"
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