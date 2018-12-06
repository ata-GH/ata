<template>
  <div class="pure_body">
    <p class="wind"></p>
    <p class="info-txt1 center">杰卡斯珍藏系列巴罗萨西拉干红葡萄酒</p>
    <div class="box-block center iphoneX">
      <p class="common-box box1" @click="choiceBox(1)">
        <span v-show="choice == 1" class="choice-active"></span>
      </p>
      <p class="common-box box2" @click="choiceBox(2)">
        <span v-show="choice == 2" class="choice-active"></span>
      </p>
      <p class="common-box box3" @click="choiceBox(3)">
        <span v-show="choice == 3" class="choice-active"></span>
      </p>
      <p class="common-box box4" @click="choiceBox(4)">
        <span v-show="choice == 4" class="choice-active"></span>
      </p>
    </div>
    <p class="center txt-tips">请选择你喜欢的包装盒，包装好礼物</p>
    <button class="common-btn marginAuto "@click="submitBZChoice">提交</button>
    <p style="height: .1rem;"></p>
  </div>
</template>

<script>
  export default {
    name: "giftBZChoice",
    data(){
      return {
        choice: ''
      }
    },
    created() {
    },
    methods: {
      submitBZChoice(){
        if(!this.choice){
          alert('请选择礼品包装盒！');
          return;
        }
        this.$router.push({
          name:'giftForm',
          params: {
            id: this.$route.params.id,
            result: this.choice
          }
        });
      },
      choiceBox(num){
        this.choice = num;
      }
    }
  }
</script>

<style lang="less">
  .box-block{
    padding: .2rem 0 0 0;
    /*padding: .2rem 0;*/
  }
  .common-box{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50% 50%;
    position: relative;
    display: inline-block;
    margin: 0 .1rem .2rem .1rem;
  }
  .box1{
    /*width: 174px;*/
    background: url("../assets/images/box1.png")#fff no-repeat center;
    background-size: .87rem auto;
  }
  .box2{
    /*width: 168px;*/
    background: url("../assets/images/box2.png")#fff no-repeat center;
    background-size: .84rem auto;
  }
  .box3{
    /*width: 182px;*/
    background: url("../assets/images/box3.png")#fff no-repeat center;
    background-size: .91rem auto;
  }
  .box4{
    /*width: 167px;*/
    background: url("../assets/images/box4.png")#fff no-repeat center;
    background-size: .86rem auto;
  }
  .txt-tips{
    font-size: .15rem;
    padding: 0 0 .1rem 0;
  }
  .choice-active{
    position: absolute;
    right: .2rem;
    bottom: .2rem;
    width: .46rem;
    height: .46rem;
    background: url("../assets/images/choice-active.png")no-repeat center;
    background-size: contain;
  }
</style>
