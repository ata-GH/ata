<template>
  <div class="index_body" style="overflow: hidden;">
    <div class="logo-content">
      <p class="logo"></p>
      <p class="logo-christmas-txt animated bounceInDown"></p><!-- -->
      <p class="logo-txt animated lightSpeedIn delay-1s"></p><!-- -->
      <p class="christmas-desc111">你的圣诞节送礼愿望清单是什么？
        <br/>
        说出来，澳贸委帮你送给最珍视的TA</p>
      <router-link tag="button" class="common-btn marginAuto iphoneX animated delay-2s wobble" to="/christmas">点击开启</router-link>
      <p style="height: 10px"></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    mounted(){
      let contnetEle = document.getElementsByClassName('logo-content')[0],bodyEle = document.getElementsByClassName('index_body')[0];
      if(contnetEle.offsetHeight > bodyEle.offsetHeight){
        bodyEle.style.height = contnetEle.offsetHeight +'px';
      }else{
        contnetEle.style.height = bodyEle.offsetHeight +'px';
      }
    }
  }
</script>

<style lang="less">
  .christmas-desc111{
    padding: .2rem 0 .3rem 0;
    font-size: .2rem;
    line-height: 1.5em;
    text-align: center;
    color: #fff;
  }
  .logo-content{
    width: 100%;
    /*height: 100%;*/
    background: url("../assets/images/bg_top.png") no-repeat top,
                url("../assets/images/bg_star.png") no-repeat center,
                url("../assets/images/bg_bottom.png") no-repeat bottom;
    background-size: 100% auto;
    background-attachment: fixed;
  }

  .logo-christmas-txt{
    width: 100%;
    height: 1.53rem;
    background: url("../assets/images/sd_logo.png")no-repeat center bottom;
    background-size: 1.44rem auto;
  }
  .logo-txt{
    width: 100%;
    /*width: 597px;*/
    height: 1.75rem;
    background: url("../assets/images/christmas_txt.png") no-repeat bottom;
    background-size: 2.89rem auto;
  }

  @-webkit-keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes bounceInUp {
    from,
    60%,
    75%,
    90%,
    to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }
    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }
    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }
    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  .bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
  }

</style>
