<template>
  <div class="root">
    <router-view></router-view>
    <audio id="audio" src="../static/music.mp3" preload="auto">
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
        let res = await POST('http://wx.hxpic.com/wxshare_cdfer.php', {'url': window.location.href});
        if(parseInt(res.code) === 0){
          this.$wx.config({
            appId: res.data.appId,
            timestamp: res.data.timestamp,
            nonceStr: res.data.nonceStr,
            signature: res.data.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareWeibo', 'onMenuShareQQ', 'showOptionMenu', 'showMenuItems', 'showAllNonBaseMenuItem']
          });
          this.$wx.ready(() => {
            let shareData = {
              title: 'this is title',
              desc: 'this is desc',
              link: 'http://wx.hxpic.com/index.php?g=wap&m=vote&a=index',
              imgUrl: ''
            };
            this.$wx.onMenuShareTimeline(shareData);
            this.$wx.onMenuShareAppMessage(shareData);
          })
        }
      },
      musicHandler(){

      }
    },
    created() {
      // this.share();
    },
    mounted() {
      document.addEventListener("WeixinJSBridgeReady", function () {
        // 微信的视频播放
        // code here ...
        // audio[0].play();
      }, false);
      // console.log(document.getElementById('audio').readyState);
      // document.getElementById('audio').addEventListener('readyState',()=>{
      //   console.log(111);
      // });
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
