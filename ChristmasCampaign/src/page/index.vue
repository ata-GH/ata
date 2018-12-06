<template>
  <div class="index_body">
    <div class="logo-content">
      <p class="logo"></p>
      <p class="logo-christmas-txt"></p>
      <p class="logo-txt"></p>
      <p class="christmas-desc">你的圣诞节送礼愿望清单是什么？
        <br/>
        说出来，澳贸委帮你送给最珍视的TA</p>
      <router-link tag="button" class="common-btn marginAuto iphoneX" to="/christmas">点击开启</router-link>
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

</style>
