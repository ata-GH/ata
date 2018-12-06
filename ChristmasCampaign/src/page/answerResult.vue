<template>
  <div class="pure_body">
    <div class="answer-result">
      <template v-if="fail">
        <p class="fail"></p>
        <p class="r-desc1 center">不要气馁，<br/>你差一点就答对了，
          再试一次吧！</p>
        <router-link tag="button" :to="{name:'answer',params:{id:$route.params.id}}"  class="common-btn marginAuto iphoneX submit-btn">再答一次</router-link>
        <router-link tag="p" class="tips-btn marginAuto center" to="/christmas">重新挑选礼物</router-link>
        </template>
      <template v-else>
        <p class="success"></p>
        <p class="r-desc1 center">
          你将有机会为好友送出由<br/>
          保乐力加中国提供的<br/>
          杰卡斯珍藏系列巴罗萨西拉干红葡萄酒
        </p>
        <router-link tag="button" class="common-btn marginAuto iphoneX submit-btn" :to="{name:'giftInfo',params:{id:$route.params.id}}">查看详情</router-link>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "answerResult",
    data() {
      return {
        fail: false,
        success: false
      }
    },
    created() {
      if (this.$route.params.result === 'fail') {
        this.fail = true;
      } else {
        this.success = true;
      }
    }
  }
</script>

<style lang="less">
  .answer-result {
    width: 100%;
    min-height: 100%;
    background: url("../assets/images/bg_top.png") no-repeat top,
    url("../assets/images/bg_bottom.png") no-repeat bottom;
    background-size: 100% auto;
  }
  .fail{
    width: 100%;
    height: 3rem;
    background: url("../assets/images/faile.png") no-repeat center bottom;
    background-size: 1.8rem auto;
  }
  .success{
    width: 100%;
    height: 3rem;
    background: url("../assets/images/success.png") no-repeat center bottom;
    background-size: 1.8rem auto;
  }
  .r-desc1{
    font-size: .15rem;
    line-height: 1.5em;
    padding: .2rem 8% .2rem 8%;
  }
  .tips-btn{
    width: 1rem;
    font-size: .15rem;
    border-bottom: solid 2px #fff;
    margin-top: .2rem;
  }
</style>
