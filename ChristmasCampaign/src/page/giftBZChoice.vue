<template>
  <div class="pure_body">
    <p class="bz-gift-block">
      <img :src="'./static/images/giftInfo-img'+id +'.png'"/>
    </p>
    <p class="info-txt2 center" v-html="txt"></p>
    <div class="box-block center">
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
    <button class="opacity0 common-btn marginAuto submit-bz"@click="submitBZChoice">提交</button>
    <p style="height: .1rem;"></p>
  </div>
</template>

<script>
  export default {
    name: "giftBZChoice",
    data(){
      return {
        choice: '',
        id: 1,
        txt: ''
      }
    },
    created() {
      let arr = ['杰卡斯珍藏系列巴罗萨西拉干红葡萄酒',
        '高乐雅 Gloria Jean\'s 的马克杯和餐券',
        '慕咖Keepcup瑞博随行杯一个',
        'Barley+品牌谷物棒和Heritage Mill赫迪庄园品牌早餐全谷物',
        '<span class="bold">Sukin 苏芊</span>宠爱肌肤套装'
      ];
      this.id = this.$route.params.id;
      this.txt = arr[this.$route.params.id -1];
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
        if (!this.choice) {
          document.getElementsByClassName('submit-bz')[0].className += ' animated slideInUp';
        }
        this.choice = num;
      }
    }
  }
</script>

<style lang="less">
  .bz-gift-block{
    width: 77%;
    padding: .1rem 0;
    text-align: center;
    margin: 0 auto;
    img{
      max-width: 100%;
    }
  }
  .box-block{
    /*padding: .2rem 0 0 0;*/
    /*padding: .2rem 0;*/
  }
  .common-box{
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50% 50%;
    position: relative;
    display: inline-block;
    margin: 0 .1rem .2rem .1rem;
  }
  .box1{
    /*width: 174px;*/
    background: url("../assets/images/box1.png")#fff no-repeat center;
    /*background-size: contain;*/
    /*background-size: .87rem auto;*/
    background-size: .78rem auto;
  }
  .box2{
    /*width: 168px;*/
    background: url("../assets/images/box2.png")#fff no-repeat center;
    /*background-size: contain;*/
    /*background-size: .84rem auto;*/
    background-size: .75rem auto;
  }
  .box3{
    /*width: 182px;*/
    background: url("../assets/images/box3.png")#fff no-repeat center;
    /*background-size: .91rem auto;*/
    background-size: .8rem auto;
    /*background-size: contain;*/
  }
  .box4{
    /*width: 167px;*/
    background: url("../assets/images/box4.png")#fff no-repeat center;
    /*background-size: .86rem auto;*/
    background-size: .75rem auto;
    /*background-size: contain;*/
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
  .info-txt2{
    padding: 0  0 .1rem 0;
  }
</style>
