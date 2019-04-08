<template>
  <div class="index_body">
    <div class="christmas-content" style="height: 100%">
      <p :class=" move ?'christmas-txt-small animated bounceInDown':'christmas-txt-small'"></p>
      <p style="font-size: .18rem;padding-bottom: 0;" :class="move ?'christmas-desc animated delay-1s flipInY':'christmas-desc'">
        来自澳大利亚的好物如此之多<br/>
        快来为你的朋友挑选吧<br/>
        祝福你愿望成真</p>
      <!-- 圣诞树场景 -->
      <div class="christmas-three">
        <div class="christmas-three-position">
          <p class="gift-reset-an st opacity0">
            <router-link class="common-link-a" style="height: 0.9rem;margin-top: 0.45rem;" tag="a" :to="{name:'gift',params:{id:1}}"></router-link>
          </p> <!-- 手套 -->
          <p class="gift-reset-an boll ">
            <router-link class="common-link-a" style="height: 100%;border-radius: 50%;" tag="a" :to="{name:'gift',params:{id:2}}"></router-link>
          </p> <!-- 气球 -->
          <p class="gift-reset-an hat opacity0">
            <router-link class="common-link-a" style="height: 0.5rem;margin-top: .05rem;" tag="a" :to="{name:'gift',params:{id:3}}"></router-link>
          </p> <!-- 帽子 -->
          <p class="gift-reset-an bell ">
            <router-link class="common-link-a" style="height: 100%;border-radius: 50%;" tag="a" :to="{name:'gift',params:{id:4}}"></router-link>
          </p> <!-- 铃铛 -->
          <p class="gift-reset-an gz">
            <router-link class="common-link-a" style="height: 0.9rem;" tag="a" :to="{name:'gift',params:{id:5}}"></router-link>
          </p> <!-- 拐杖 -->
        </div>
      </div>
    </div>
    <span class="rule-control-btn" @click="ruleMask=true">
      活动<br/>规则
    </span>
    <div v-show="ruleMask" class="mask">
      <div class="content-mask">
        <h3 class="r-t">活动规则</h3>
        <p class="r-desc">澳大利亚物产丰富，你来挑选想要的圣诞节愿望清单，澳贸委来助你愿望成真！</p>
        <p class="r-desc">按照以下提示操作，get属于你的2018圣诞小幸运：</p>
        <p class="r-desc">①“挑礼物”：从圣诞树上选择1个你喜欢的神秘礼盒。</p>
        <p class="r-desc"> ②“小挑战”：打开神秘礼盒，回答一道相关问题，答对即有机会为朋友送出由赞助商提供的圣诞礼物一份。</p>
        <p class="r-desc">③“写祝福”：为朋友包好礼品，写上暖心祝福语吧~附上你希望收到该礼物的收件人地址和联系方式，祝福好运伴随你。</p>
        <p class="r-desc"> ④“候佳音”：我们会从提交的愿望清单中随机抽取50名幸运儿，抽中的用户，澳贸委将替你把圣诞礼物送到TA手中。</p>
        <p class="r-desc">活动时间：2018年12月17日 - 31日<br/>
          结果公布：请密切留意澳贸委官微推送</p>
        <br/>
        <button class="common-btn marginAuto iphoneX" @click="closeRule">知道了</button>
        <p style="height: .1rem"></p>
      </div>
    </div>
  </div>
</template>

<script>
 /* let width = 750,height=878;
  let plosition = {
    st:{left:387,bottom:447},
    boll:{left:210,bottom:467},
    hat:{left:127,bottom:258},
    bell:{left:328,bottom:193},
    gz:{left:513,bottom:186}
  };*/
  export default {
    name: "christmas",
    data() {
      return {
        ruleMask: false,
        move: false,
      }
    },
    methods: {
      closeRule() {
        this.ruleMask = false;
        this.move = true;
      }
    },
    mounted(){
      let topHeight = document.getElementsByClassName('christmas-txt-small')[0].offsetHeight+document.getElementsByClassName('christmas-desc')[0].offsetHeight;
      let contentEle = document.getElementsByClassName('christmas-three')[0],bodyEle = document.getElementsByClassName('christmas-content')[0];
      contentEle.style.height = contentEle.offsetWidth*90/75 + 'px';
      // alert(topHeight);
      // alert(contnetEle.offsetHeight);
      // alert(bodyEle.offsetHeight)
      if (contentEle.offsetHeight + topHeight > bodyEle.offsetHeight) {
        bodyEle.style.height = contentEle.offsetHeight + topHeight + 'px';
        document.getElementsByClassName('index_body')[0].style.height = contentEle.offsetHeight + topHeight + 'px';
      }
      setTimeout(()=>{
        var listEle = document.getElementsByClassName('gift-reset-an');
        for(let i=0;i<listEle.length;i++){
          if (i === 0 || i===2) {
            listEle[i].className += ' st-active pulse'
          } else {
            listEle[i].className += ' animated infinite rotateInTree';
          }
        }
      },500)
    },
    beforeRouteEnter(to,form,next){
      next(vm => {
        if (form.name == 'index') {
          vm.ruleMask = true;
          vm.move = false;
        } else {
          vm.move = true;
        }
        // 通过 `vm` 访问组件实例
      })
    }
  }
</script>

<style>
  .christmas-three {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.8rem;
    background: url("../assets/images/christmas_tree.png") no-repeat bottom;
    background-size: 100% auto;
  }
  .r-t {
    font-size: .2rem;
    text-align: center;
    line-height: .5rem;
  }
  .r-desc {
    font-size: .15rem;
    padding: 0 6% .1rem 6%;
    line-height: 1.4em;
  }
  .rule-control-btn{
    position: absolute;
    width: .5rem;
    height: .5rem;
    left: .5rem;
    top: .5rem;
    font-size: .12rem;
    line-height: 1.2em;
    padding-top: .1rem;
    border-radius: 50% 50%;
    text-align: center;
    border: solid 1px #009039;
    background-color: #083c1f;
    box-sizing: border-box;
  }
  .content-mask{
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .pb6{
    padding-bottom: 4.5rem;
  }
  .christmas-three-position{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .gift-reset-an{
    position: absolute;
    transform: scale3d(0,0,0);
  }
  .st{
    left: 1.935rem;
    bottom: 2.23rem;
    width: .85rem;
    height: 1.39rem;
    background: url("../assets/images/st.png") no-repeat center;
    background-size: .85rem auto;
  }
  .boll{
    left: 1.05rem;
    bottom: 2.33rem;
    width: .59rem;
    height: .62rem;
    background: url("../assets/images/boll.png") no-repeat center;
    background-size: contain;
    /*background-size: .59rem auto;*/
  }
  .hat{
    left: .63rem;
    bottom: 1.29rem;
    width: .74rem;
    height: .73rem;
    background: url("../assets/images/hat.png") no-repeat center;
    background-size: .74rem auto;
  }
  .bell{
    left: 1.64rem;
    bottom: .92rem;
    width: .68rem;
    height: .81rem;
    background: url("../assets/images/bell.png") no-repeat center;
    background-size: .68rem auto;
  }
  .gz{
    right: .71rem;
    bottom: .93rem;
    width: .47rem;
    height: .91rem;
    background: url("../assets/images/gz.png") no-repeat center;
    background-size: .47rem auto;
  }
  .st-active{
    opacity: 1;
    transform: scale3d(1,1,1);
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
  @-webkit-keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }
  .pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }
  .common-link-a{
    display: block;
    /*background-color: rebeccapurple;*/
  }
</style>
