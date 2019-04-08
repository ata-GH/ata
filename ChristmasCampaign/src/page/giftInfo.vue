<template>
  <div class="pure_body">
    <div class="info-content">
      <p class="info-txt center gift-info-title" v-html="giftInfo.award">
      </p>
      <p class="wind">
        <img :src="giftInfo.img"/>
      </p>
      <p class="info-txt1 center" style="font-size: .13rem;padding: .1rem .1rem;" v-html="giftInfo.title"></p>
      <p class="info-desc">{{giftInfo.desc}}
      </p>
      <div class="btn-box center iphoneX">
        <router-link tag="button" class="common-btn gift-btn" to="/christmas">重新挑选礼物</router-link>
        <router-link tag="button" class="common-btn gift-btn" :to="{name:'giftBZChoice',params:{id:$route.params.id}}">选定了，包好礼物</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  var infoData = require('../api/giftInfo.json');
  export default {
    name: "giftInfo",
    data() {
      return {
        giftInfo:{}
      }
    },
    created() {
      window.console.log(this.$route.params.id);
      this.giftInfo = infoData[this.$route.params.id]
    }
  }
</script>

<style lang="less">
  .info-content{
    width: 100%;
    /*padding-bottom: 1rem;*/
    background: url("../assets/images/giftInfoBg.jpg") no-repeat center top;
    background-size: 100% auto;
  }
  /*.info-txt{*/
    /*font-size: .15rem;*/
    /*line-height: 1.5em;*/
    /*padding: .7rem 8% .1rem 8%;*/
  /*}*/
  .info-desc{
    padding: .2rem 8%;
    font-size: .14rem;
    line-height: 1.5em;
    min-height: 1.2rem;
    background-color: #00562a;
  }
  .btn-box{
    padding: 0.4rem 0 .25rem 0;
  }
  .gift-btn{
    max-width: 40%;
    display: inline-block;
    margin: 0 .1rem;
    font-size: .16rem;
  }
  .gift-info-title{
    em{
      font-weight: bold;
      font-style: normal;
      font-size: .16rem;
    }
    .small{
      font-style: normal;
      /*font-size: .13rem;*/
    }
  }
</style>
