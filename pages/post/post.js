Page({
  data: {
    transition:''
  },
  onShow:function() {
        this.setData({
          transition: 'transform: translateY(0); '
        })
  },
  onHide:function() {
    this.setData({
      transition: 'transform: translateY(650rpx);opacity:0.5'
    })  

  },
  closePost:function() {
    this.setData({
      transition: 'transform: translateY(650rpx); '
    });
    setTimeout(
      function(){
        wx.switchTab({
          url: '/pages/index/index',
        })
      },500
    )
  },
  goToPost:function(e) {
    let which = e.currentTarget.dataset.which;
    console.log(which);
    wx.navigateTo({
      url: '/pages/publish/publish?which='+which,
    })
  },
})