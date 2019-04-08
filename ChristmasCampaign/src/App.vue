<template>
  <div class="root" id="root">
    <p id="snow-content" style="width: 100%;height: 100%;position: absolute;left: 0;top: 0;bottom: 0;overflow: hidden;"></p>
    <router-view></router-view>
    <audio id="audio" src="./static/mp3/music.mp3" autoplay="autoplay" loop="loop" @canplaythrough="musicHandler">
      您的浏览器不支持 audio 标签。
    </audio>
    <span v-show="music" :class="'music-icon ' + music" @click="musicHandler"></span>
  </div>
</template>
<script type="text/ecmascript-6">
  import {POST} from "./api/getData";

  export default{
    data() {
      return {
        songInfo: {},
        isAutoPlay: false,
        music: '',
      }
    },
    methods: {
      async share(){
        let res = await POST('?a=shareConfig', {'url': window.location.href});
        this.$wx.config({
          appId: res.appId,
          timestamp: res.timestamp,
          nonceStr: res.nonceStr,
          signature: res.signature,
          jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareWeibo', 'onMenuShareQQ', 'showOptionMenu', 'showMenuItems', 'showAllNonBaseMenuItem']
        });
        this.$wx.ready(() => {
            let shareData = {
              title: '圣诞节，澳贸委助你愿望成真',
              desc: '我们把礼物送给你最珍视的TA',
              link: 'https://dev.aofanr.com/h5/chrismas2018/index.php',
              imgUrl: 'https://dev.aofanr.com/h5/chrismas2018/resources/static/images/wx-share.jpg'
            };
            this.$wx.onMenuShareTimeline(shareData);
            this.$wx.onMenuShareAppMessage(shareData);
          })
      },
      musicHandler(){
        var audio = document.getElementById('audio');
        if(!this.music || this.music === 'off'){
          this.music = 'on';
          audio.play();
        }else {
          this.music = 'off';
          audio.pause();
        }
      }
    },
    created() {
      this.share();
    },
    mounted() {
      document.addEventListener("WeixinJSBridgeReady", function () {
        // 微信的音频播放
        var audio = document.getElementById('audio');
        audio.play();
        this.music = 'on';
      }, false);
    }
  }
</script>
<style lang="less">
  @import './style/common';
  .root{
    position: absolute;
    width: 100%;
    height: 100%;
    max-width: 750px;
    margin: 0 auto;
  }
  .music-icon{
    position: fixed;
    top: .2rem;
    right: .2rem;
    width: .4rem;
    height: .4rem;
  }
  .off{
    background: url("./assets/images/off.png")no-repeat center;
    background-size: .35rem auto;
  }
  .on{
    background: url("./assets/images/on.png")no-repeat center;
    background-size: .35rem auto;
  }
  /*.no-scroll{*/
    /*overflow: hidden;*/
  /*}*/
</style>
