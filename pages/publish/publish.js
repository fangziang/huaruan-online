// pages/publish/publish.js
var app = getApp();
var which = ""
var Bmob = require('../../utils/bmob.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    files:[],
    photoNums:0,
    array: ['1个月', '2个月', '3个月', '半年'],
    index: 0,
    value:'1个月',
    notemaxLen:200,
    noteNowLen:0,
    productType:'',
    userInfo:{}
  },
  chooseImage: function (e) {
    var that = this;
    if(that.data.photoNums == 8) {
      wx.showModal({
        title: '提示',
        content: '最多上传8张图片！',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      var that = this;
      wx.chooseImage({
        count:1,
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          console.log(res.tempFilePaths)
          // var url = res.tempFilePaths;
          // var name = "url.jpg";
          // var file = new Bmob.File(name, url);
          // file.save().then(function (res) {
          //   console.log(res.url())
          // }, function (error) {

          // })
          that.setData({
            files: that.data.files.concat(res.tempFilePaths),
            photoNums: that.data.photoNums + 1
          });
        }
      })
    }
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      index: e.detail.value,
      value: this.data.array[e.detail.value]
    })
    console.log(this.data.array[e.detail.value])
  },
  // 提交发布,将数据发送到服务端
  commitPost:function(e) {
    console.log(e.detail.value)
    var that = this;
    var value = e.detail.value;
    var title = value.title; //商品标题
    var originPrice = value.originPrice; //商品原价
    var sellingPrice = value.sellingPrice; //商品售价 
    var description = value.description; //商品描述
    var timeLimit = that.data.value; //商品下架期限
    var productType = that.data.productType;//商品类型
    var visits = 0; //浏览次数
    var comments = 0; //评论次数
    var url = that.data.files[0];
    console.log("url"+url)
    var Diary = Bmob.Object.extend('Product');
    var diary = new Diary();
    diary.set("title", title);
    diary.set('visits', visits);
    diary.save(null,{
      success:function(result) {
        console.log(result);
      }
    })
    var url = that.data.files[0];
    var name = "url33.jpg";
    var a = [url];
    // File的第二个参数必须是数组！！！！
    var file = new Bmob.File(name, a);
    file.save().then(function (res) {
      console.log(res.url())
      wx.showToast({
        title: 'OK',
      })
      setTimeout(
        function(){
          wx.switchTab({
            url: '../index/index',
          })
        }, 1000
      )
    }, function (error) {

    })
    console.log("url2"+url)


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(options);
    which = this.whichType(options.which);
    wx.setNavigationBarTitle({
      title: "发布-" + which,
    });
    this.setData({
      userInfo:app.globalData.userInfo,
      productType:which
    })
    console.log(this.data.userInfo)
  },
  whichType:function(which) {
    switch(which) {
      case "t1":return "教材书籍";
      case "t2":return "数码家电";
      case "t3":return "文化体育";
      case "t4": return "日化服饰";
      case "t5": return "技能服务";
      case "t6": return "求购求伴";
    }
  },
  // 控制textarea的输入字数
  bindTextAreaChange:function(e) {
    var that = this;
    var value = e.detail.value;
    var len = parseInt(value.length);
    if (len > that.data.notemaxLen)return;
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