<template>
  <div class="index_body">
    <div class="christmas-content">
      <p class="logo"></p>
      <p :class="'l-common-gift gift-icon'+id"></p>
      <p class="last-tips center">恭喜你！你的愿望我们已经收到！！<br/>
        祝你幸运，圣诞快乐!</p>
      <p class="chat-block">
        <img src="../assets/images/code.jpg"/>
        <span>
          获奖名单请留意近期
          澳贸委Austrade
          <br/>
          官方微信
        </span>
      </p>
      <button class="common-btn submit-btn1" @click="share=true">分享让好友也来试试</button>
      <p class="tips-bottom center">{{txt.split('，')[0]}}
        <a class="mask-btn" @click="mask=true">{{txt.split('，')[1]}}</a></p>
    </div>
    <!-- 关注公众号弹层 -->
    <div class="mask" v-show="mask">
      <div class="last-mask-content">
        <img :src="'https://dev.aofanr.com/h5/chrismas2018/resources/static/images/giftInfo-chat' + codeWeChat +'.jpg'"/>
        <p v-html="txt">{{txt.split('，')[0]}}<br/>
          {{txt.split('，')[1]}}</p>
        <button class="common-btn marginAuto" @click="mask=false">知道了</button>
      </div>
    </div>
    <!-- 指示分享弹层 -->
    <div class="mask" v-show="share">
      <div class="last-mask-content1">
        <p class="share-img"></p>
        <br/>
        <br/>
        <button class="common-btn marginAuto" @click="share=false">知道了</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "last",
    data() {
      return {
        id: 1,
        codeWeChat: 1,
        mask: false,
        share: false,
        txt: '',
      }
    },
    created() {
      let arr = ['选购优质的澳大利亚葡萄酒，敬请关注保乐力加中国',
        '品味地道澳大利亚咖啡，敬请关注高乐雅',
        '选购优质的澳大利亚创意产品，敬请关注Mood慕咖',
        '选购美味的澳大利亚麦片产品，敬请关注自由食品freedomfoods',
        '选购优质的澳大利亚护肤产品，敬请关注Sukin澳洲苏芊'
      ];
      this.codeWeChat = this.$route.params.id;
      this.txt = arr[this.$route.params.id - 1]
      this.id = this.$route.params.result;
    },
    methods: {},
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
  .l-common-gift{
    width: 100%;
    height: 2rem;
  }
  .last-tips{
    padding: .1rem 8%;
    font-size: .18rem;
  }
  .chat-block{
    text-align: center;
    padding: .1rem 0;
    img{
      width: .9rem;
      height: .9rem;
      vertical-align: bottom;
      margin: 0 .2rem;
    }
    span{
      width: 1.3rem;
      display: inline-block;
      height: .9rem;
      padding-top: 0.2rem;
      box-sizing: border-box;
    }
  }
  .tips-bottom{
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    /*bottom: 0;*/
    padding: .2rem;
    line-height: .2rem;
  }
  .mask-btn{
    display: inline-block;
    color: inherit;
    border-bottom: solid 1px #fff;
  }
  .last-mask-content{
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    img{
      width: 1.25rem;
      height: 1.25rem;
    }
    p{
      padding: .2rem 0;
    }
  }
  .last-mask-content1{
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
  .share-img{
    height: 4.1rem;
    background: url("../assets/images/share.png")no-repeat center bottom;
    background-size: 3.21rem auto;
  }
</style>
