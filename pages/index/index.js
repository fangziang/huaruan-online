//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    slides:[
      {
        imgUrl: 'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/4ede04ee40eabe5880cf157051eeb700.png',
        name:'userTips'
      },
      {
        imgUrl: 'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/16233e06400e7e1280b3f4d663ba72a6.png',
        name:'userFeedback'
      },
      {
        imgUrl: 'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/5875307b4019c05180abc0dc505586ac.png',
        name:'userFeeling'
      },
      {
        imgUrl: 'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/ba67020b400eaf1680a6d32c49b77b24.png',
        name:'claim'
      }
    ],
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    duration:1000,
    messageIconUrl:'../../static/images/ic_jwc.png',
    moreIconUrl:'../../static/images/comments.png',
    filterIconUrl:'../../static/images/map5.png',
    productsList:[]
  },
  // 处理轮播图的点击链接
  slideDetails:function(e) {
    let slideName = e.currentTarget.dataset.name;
    console.log(slideName);
    if(slideName == 'userTips') {
      // 链接到用户使用手册
      console.log('链接到用户使用手册')
    } else if(slideName == 'userFeedback') {
      // 链接到用户反馈问卷调查
      console.log('链接到用户反馈问卷调查')
    } else if(slideName == 'userFeeling') {
      //链接到用户体验调查问卷
      console.log('链接到用户体验调查问卷')
    } else if(slideName == 'claim') {
      // 链接到产品公告
      console.log('链接到产品公告')
    }
  },
  // 点击跳转到消息界面
  lookMessage:function() {

  },
  // 刷新
  refresh:function() {

  },
  // 下拉刷新
  onPullDownRefresh:function() {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },

  // 过滤选择,根据不同发按钮，采取不同的动作
  filter:function(e) {
    let method = e.currentTarget.dataset.method;
    console.log(method);
    if(method == 'new') {
      // 按最新的商品发布进行排序-渲染
      console.log('选择了最新')
    } else if(method == 'popular') {
      // 按最热门的进行排序-渲染
      console.log('选择了最热')
    } else if(method == 'filter') {
      // 右边抽屉导航滑出，选择筛选的类型
      console.log("选择了筛选")
    }
  },

  // 数据测试
  onReady:function() {
    this.setData({
      productsList:[
        {
          title:'雅思词汇',
          price:'￥88',
          pictures:[
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/c2f5a24a40b460c08068ed08572829d0.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/6808523e40d1382f8003c8a6067822cb.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/8130afa040b4b0d580ec97d30dcb0586.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/8130afa040b4b0d580ec97d30dcb0586.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/8130afa040b4b0d580ec97d30dcb0586.jpg'
          ],
          description:"雅思考试必备资料，低价卖出，欢迎来购",
          userAvatarUrl:'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/10/e915e3a840c832b380bb70aa93441506.jpg',
          userNickname:'大佬',
          userVerified:'已认证',
          userAddress:'中山大学'
        },
        {
          title: '雅思词汇',
          price: '￥88',
          pictures: [
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/c2f5a24a40b460c08068ed08572829d0.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/6808523e40d1382f8003c8a6067822cb.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/8130afa040b4b0d580ec97d30dcb0586.jpg'
          ],
          description: "雅思考试必备资料，低价卖出，欢迎来购",
          userAvatarUrl: 'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/10/e915e3a840c832b380bb70aa93441506.jpg',
          userNickname: '大佬',
          userVerified: '已认证',
          userAddress: '中山大学'
        },
        {
          title: '雅思词汇',
          price: '￥88',
          pictures: [
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/c2f5a24a40b460c08068ed08572829d0.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/6808523e40d1382f8003c8a6067822cb.jpg',
            'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/13/8130afa040b4b0d580ec97d30dcb0586.jpg'
          ],
          description: "雅思考试必备资料，低价卖出，欢迎来购",
          userAvatarUrl: 'http://bmob-cdn-17230.b0.upaiyun.com/2018/03/10/e915e3a840c832b380bb70aa93441506.jpg',
          userNickname: '大佬',
          userVerified: '已认证',
          userAddress: '中山大学'
        }
      ]
    })
  }

})
