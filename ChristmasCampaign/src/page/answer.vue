<template>
  <div class="pure_body">
    <div class="center">
      <p class="left-logo"></p>
      <p :class="'right-gift gift'+id"></p>
      <p class="answer-title iphoneX" v-html="answerObj.title"></p>
      <div class="answer-choice">
        <template v-for="(choice,index) in answerObj.choice">
          <p :class="choice_item === index ? 'choice-item active' : 'choice-item'" @click="choiceHandler(choice,index)">
            {{choice}}</p>
        </template>
      </div>
      <button class="opacity0 common-btn marginAuto iphoneX submit-btn" @click="submitAnswer">提交</button>
      <p style="height: .1rem;"></p>
    </div>
  </div>
</template>

<script>
  var appData = require('../api/christmas.json');

  export default {
    name: "answer",
    data() {
      return {
        id: 1,
        answerObj: {
          title: '',
          choice: []
        },
        choice_item: '',
        /* 关于答题结果 */
        answerTxt: '',
        result: ''
      }
    },
    created() {
      this.getData();
    },
    methods: {
      getData(){
        let answerObj = appData[this.$route.params.id];
        this.id = this.$route.params.id;
        let obj = [].concat(answerObj.choices);
        this.answerTxt = answerObj.choices[answerObj.answer - 1];
        this.answerObj.title = answerObj.title;
        let arr = [];
        let UPCASE = ["A. ", "B. ", "C. ", "D. "];
        for (let j = 0; j < 4; j++) {
          let txt='';
          if (parseInt(this.$route.params.id) === 4 || parseInt(this.$route.params.id) === 5) {
            txt = obj.splice(0, 1);
          } else {
            txt = obj.splice(this.getRandom(obj.length), 1);
          }
          arr.push(UPCASE[j] + txt[0])
        }
        this.answerObj.choice = arr;
      },
      getRandom(max) {
        return Math.floor(Math.random() * max);
      },
      choiceHandler(choice, index) {
        this.choice_item = index;
        if (!this.result) {
          document.getElementsByClassName('submit-btn')[0].className += ' animated slideInUp';
        }
        if (choice.indexOf(this.answerTxt) > 0) {
          this.result = 'success'
        } else {
          this.result = 'fail'
        }
      },
      submitAnswer() {
        if (!this.result) {
          window.alert('请选择一项');
          return;
        }
        this.$router.push({
          name: 'answerResult',
          params: {id: this.$route.params.id, result: this.result}
        })
      }
    },
    mounted(){}
  }
</script>

<style lang="less">
  .left-logo {
    width: 1.5rem;
    height: 1.7rem;
    display: inline-block;
    background: url("../assets/images/sd_logo.png") no-repeat center;
    background-size: auto 1.1rem;
  }
  .right-gift {
    width: 1.04rem;
    height: 1.7rem;
    display: inline-block;
    margin-left: .23rem;
    background-size: 100% auto;
  }
  .answer-title {
    text-align: left;
    font-size: .15rem;
    line-height: 1.5em;
    padding: 0 8% .1rem 8%;
    span{
      display: block;
      height: .1rem;
    }
  }
  .choice-item {
    margin: .1rem auto 0 auto;
    width: 3.25rem; /*651*/
    padding: .12rem .25rem;
    font-size: .16rem;
    background-color: #0f5431;
    text-align: left;
    &.active {
      background-color: #333333;
    }
  }
  .submit-btn {
    margin-top: .3rem;
  }
</style>
