<template>
  <div class="index_body">
    <div class="fox">
      <div class="christmas-content" style="min-height: 100%;">
        <p class="christmas-txt-small"></p>
        <p class="christmas-desc iphoneX" style="padding-bottom: .3rem">
          哇哦！<br/>
          你打开的愿望礼物<br/>
          是美味的澳大利亚葡萄酒！
        </p>
        <div class="gift_box">
          <div :class="'marginAuto common-gift gift'+id"></div>
        </div>
        <router-link :to="{name:'answer',params:{id:id}}" class="common-btn marginAuto try-btn" tag="button">我想试试看
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
    data(){
      return{
        id: 1
      }
    },
    created(){
      this.id = this.$route.params.id;
    },
    mounted(){
      let contnetEle = document.getElementsByClassName('christmas-content')[0],bodyEle = document.getElementsByClassName('index_body')[0];
      if(contnetEle.offsetHeight > bodyEle.offsetHeight){
        bodyEle.style.height = contnetEle.offsetHeight +'px';
      }else{
        contnetEle.style.height = bodyEle.offsetHeight +'px';
      }
    }
  }
</script>

<style lang="less">
  .fox{
    width: 100%;
    height: 100%;
    background: url("../assets/images/fox.png") no-repeat center;
    background-size: auto 120%;
  }
  .common-gift{
    width: 2.08rem;
    height: 2.5rem;
    margin-top: .1rem;
  }
  .try-btn{
    width: 1.9rem;
    margin-top: .6rem;
  }
  .tips-btn{
    width: 1rem;
    font-size: .15rem;
    border-bottom: solid 1px #fff;
    margin-top: .2rem;
  }
</style>
