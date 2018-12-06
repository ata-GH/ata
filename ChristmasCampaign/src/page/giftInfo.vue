<template>
  <div class="pure_body">
    <div class="info-content">
      <p class="info-txt center">
        恭喜你！你有机会为好友送出由<br/>
        保乐力加中国提供的<br/>
        杰卡斯珍藏系列巴罗萨西拉干红葡萄酒</p>
      <p class="wind"></p>
      <p class="info-txt1 center">杰卡斯珍藏系列巴罗萨西拉干红葡萄酒</p>
      <p class="info-desc">这里是商家品牌介绍 ：澳大利亚属于新世界葡萄酒生产国，可以将澳大利亚葡萄酒划分为新世界葡萄酒。与旧世界的葡萄酒产国相比，澳洲葡萄酒的酿制方式是与众不同的，除了严格遵循的传统酿酒方式外，还采用先进的酿造工艺和现代化的酿酒设备，加上澳大利亚稳定的气候条件，其每年出产的葡萄酒的品质都相对稳定。
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
      window.console.log(infoData[this.$route.params.id])
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
  .info-txt{
    font-size: .15rem;
    line-height: 1.5em;
    padding: .7rem 8% .1rem 8%;
  }
  .info-desc{
    padding: .2rem 8%;
    font-size: .13rem;
    line-height: 1.5em;
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
</style>
