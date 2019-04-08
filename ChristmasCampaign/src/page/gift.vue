<template>
  <div class="index_body" style="overflow: hidden;">
    <div class="fox">
      <div class="fox-bg rotateIn"
           :style="'width:' + client +';height:'+client+';margin-left:'+ clientHalf+';margin-top: '+clientHalf"></div> <!--rotateIn-->
      <div style=""></div>
      <div class="christmas-content" style="min-height: 100%;">
        <p class="christmas-txt-small"></p>
        <p class="christmas-desc iphoneX" v-html="txt" style="padding-bottom: .3rem">
        </p>
        <div class="gift_box">
          <!--<div :class="'marginAuto common-gift zoomIn gift'+id"></div>-->
          <div :class="'marginAuto common-gift zoomIn gift'+id+'-gif'"></div>
        </div>
        <p class="center">答对一道有关澳大利亚{{giftName}}的问题~<br/>
          就能获得实现愿望的机会！
        </p>
        <router-link :to="{name:'answer',params:{id:id}}" class="common-btn marginAuto try-btn animated delay-1s slideInUp" tag="button">我想试试看
        </router-link>
        <router-link tag="p" class="tips-btn marginAuto center" to="/christmas">重新挑选礼物</router-link>
        <p style="height: .1rem"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "gift",
    data() {
      return {
        id: 1,
        client: '100%',
        clientHalf: '-50%',
        txt: '',
        giftName: ''
      }
    },
    created(){
      let arr = [
        '哇哦！<br/>你打开的愿望礼物<br/>是美味的澳大利亚葡萄酒',
        '不错哦！<br/>你打开的愿望礼物<br/>是醇厚幽香的澳大利亚咖啡',
        '哈哈！<br/>你打开的愿望礼物<br/>是超酷的澳大利亚创意产品' ,
        '恭喜你!<br/>你打开的愿望礼物<br/>是香脆可口的澳大利亚麦片',
        '点赞！<br/>你打开的愿望礼物<br/>是天然安全的澳大利亚护肤品'];
      let arr1 = ['葡萄酒', '咖啡', '创意产品', '麦片', '护肤品'];
      this.id = this.$route.params.id;
      this.txt = arr[this.id-1];
      this.giftName = arr1[this.id-1]
    },
    mounted(){
      let contnetEle = document.getElementsByClassName('christmas-content')[0],bodyEle = document.getElementsByClassName('index_body')[0];
      if(contnetEle.offsetHeight > bodyEle.offsetHeight){
        bodyEle.style.height = contnetEle.offsetHeight +'px';
        this.client = (contnetEle.offsetHeight + 60) +'px';
        this.clientHalf = -(contnetEle.offsetHeight + 60)/2 +'px';
      }else{
        contnetEle.style.height = bodyEle.offsetHeight +'px';
        this.client = (bodyEle.offsetHeight + 60) +'px';
        this.clientHalf = -(bodyEle.offsetHeight + 60)/2 +'px';
      }
    }
  }
</script>

<style lang="less">
  .fox{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .fox-bg{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12rem;
    height: 120%;
    background: url("../assets/images/fox1.png") no-repeat center;
    background-size: 120% auto;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transform-origin:50% 50%;
    /*-webkit-animation-iteration-count: 2;*/
    /*animation-iteration-count: 2;*/
  }
  .common-gift{
    width: 2.08rem;
    height: 2rem;
    /*margin-top: .1rem;*/
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    transform-origin:50% 20%;
  }
  .try-btn{
    width: 1.9rem;
    margin-top: .1rem;
  }
  .tips-btn{
    width: 1rem;
    font-size: .15rem;
    border-bottom: solid 1px #fff;
    margin-top: .2rem;
  }
  @-webkit-keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {opacity: 1;}
  }
  @keyframes zoomIn {
    from {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50% {opacity: 1;}
  }
  .zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }
  @-webkit-keyframes rotateIn {
    from {
      -webkit-transform: rotateZ(0);
      transform: rotateZ(0);
    }
    to {
      -webkit-transform: rotateZ(1080deg);
      transform: rotateZ(1080deg);
    }
  }
  @keyframes rotateIn {
    from {
      -webkit-transform: rotateZ(0);
      transform: rotateZ(0);
    }
    to {
      -webkit-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }
  .rotateIn {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
    animation-timing-function: cubic-bezier(0,.77,.25,.99);
    /*animation-timing-function: linear;*/
  }
</style>
