Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.setSrc('../../pages/music/Play With Fire.mp3')
    this.audioCtx.play()
  },
  data: {
   album: '../../pages/image/playwithfire.jpg',
   animation:"",
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  
  audioStart: function () {
    this.audioCtx.seek(0)
  }
  
})