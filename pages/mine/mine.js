// pages/mine/mine.js
var app = getApp()

Page({
  data:{
    motto: 'Hello World',
    minelist: [
      {
        id: 'mymsg',
        name: '我的消息',
        pages: 'mymsg'
      },{
        id: 'mycollec',
        name: '我的收藏',
        pages: 'thumbcollec'
      },{
        id: 'mycomm',
        name: '我的评论',
        pages: 'mycomm'
      },{
        id: 'mythumb',
        name: '我的点赞',
        pages: 'thumbcollec'
      }
    ]
  },




  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})