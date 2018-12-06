<template>
  <div class="pure_body hAuto">
    <div v-show="toast" class="top_tips"><p :class="'top_tips_block animated fadeInDown '+ toastFadeIn">{{txt}}</p></div>
    <div class="christmas-content" style="padding-bottom: .2rem">
      <p class="christmas-txt-small"></p>
      <div class="form-block">
        <p :class="'gift-common-icon gift-icon'+id"></p>
        <p class="info-txt1 center pt-f">杰卡斯珍藏系列巴罗萨西拉干红葡萄酒</p>
        <form class="form">
          <p class="f-item">
            <label>礼物收件人姓名：</label><br/>
            <input v-model="form.username" name="username" placeholder="请输入真是姓名"/>
          </p>
          <p class="f-item">
            <label>收件人联系人手收：</label><br/>
            <input maxlength="11" v-model="form.phone" name="phone" placeholder="请注意手机号码填写正确"/>
          </p>
          <p class="f-item">
            <label>收件人地址：</label><br/>
            <input v-model="form.address" name="address" placeholder="请确保地址可以收件"/>
          </p>
          <p class="f-item">
            <label>你想对TA说的话</label><br/>
            <textarea v-model="form.worlds" name="worlds" placeholder="100字以内"></textarea>
            <span>{{form.worlds.length}}/100</span>
          </p>
        </form>
        <form class="form1">
          <p class="avatar"><img src="../assets/images/box1.png"/></p>
          <p class="center">赠送人：好奇尾巴</p>
          <p class="f-item">
            <label>你的姓名：</label><br/>
            <input v-model="form.formUsername" name="formUsername" placeholder="请输入赠送人姓名"/>
          </p>
          <p class="f-item">
            <label>你的联系手机：</label><br/>
            <input maxlength="11" v-model="form.formPhone" name="formPhone
" placeholder="请确保输入正确，以便中将后通知"/>
          </p>
        </form>
        <p class="jsq-tips">提示：1. 本页所收集信息仅用于活动报名之用,不作其他用途。2. 获奖结果最终以具体通知为准，澳贸委保留最终解释权。</p>
      </div>
      <button class="common-btn submit-btn1" @click="submitHandler">提交愿望</button>
      <router-link tag="p" class="tips-btn2 marginAuto center" to="/christmas">重新挑选礼物</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "giftForm",
    data() {
      return {
        id: 1,
        toast: false,
        toastFadeIn:'',
        txt: '',
        form: {
          username: '',
          phone: '',
          address: '',
          worlds: '',
          formUsername: '',
          formPhone: ''
        }
      }
    },
    created() {
      this.id = this.$route.params.id;
    },
    methods: {
      submitHandler() {
        if (!this.form.username) {
          this.toastHandler('请填写收件人姓名');
        } else if (!this.form.phone) {
          this.toastHandler('请填写收件人手机号');
        } else if (!/1\d{10}/.test(this.form.phone)) {
          this.toastHandler('请填写正确格式的手机号');
        } else if (!this.form.address) {
          this.toastHandler('请填写收件人地址');
        } else if (!this.form.worlds) {
          this.toastHandler('请输入想对TA说的话');
        } else if (this.form.worlds.length > 100) {
          this.toastHandler('请输入100以内文字');
        } else if (!this.form.formUsername) {
          this.toastHandler('请填写您的姓名');
        } else if (!this.form.formPhone) {
          this.toastHandler('请填您的手机号');
        } else if (!/1\d{10}/.test(this.form.formPhone)) {
          this.toastHandler('请填写正确格式的手机号');
        } else {
          // this is ajax here ...
          this.$router.push({name: 'last'})
        }
      },
      toastHandler(txt){
        if (this.toast) return;
        this.txt = txt;
        this.toast = true;
        setTimeout(()=>{
          this.toastFadeIn = 'fadeIn';
        },2000);
        setTimeout(()=>{
          this.toast = false;
          this.toastFadeIn = '';
        },3000)
      }
    }
  }
</script>

<style lang="less">
  .hAuto {
    height: auto;
  }
  .form-block {
    width: 3.2rem;
    margin: 1rem auto 0 auto;
    background-color: #fff;
    color: #000;
    position: relative;
  }
  .gift-common-icon {
    width: 100%;
    height: 1.6rem;
    position: absolute;
    top: -.8rem;
  }
  .pt-f {
    padding-top: .93rem;
  }
  .form {
    padding: 0 .23rem .15rem .23rem;
    border-top: solid 2px #cad6d0;
    border-bottom: solid 2px #cad6d0;
  }
  .f-item {
    label {
      line-height: .35rem;
      font-size: .15rem;
      padding-left: .1rem;
    }
    input {
      border: solid 1px #cad6d0;
      width: 100%;
      height: .4rem;
      text-indent: .1rem;
      &:focus {
        border-color: #007436;
      }
    }
    textarea {
      border: solid 1px #cad6d0;
      width: 100%;
      height: 1.4rem;
      padding: .05rem .1rem;
      line-height: 1.5em;
      box-sizing: border-box;
      &:focus {
        border-color: #007436;
      }
    }
  }
  .form1 {
    padding: .31rem .23rem .15rem .23rem;
    border-bottom: solid 2px #cad6d0;
  }
  .avatar {
    width: .65rem;
    height: .65rem;
    display: block;
    margin: 0 auto;
    border-radius: 50% 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .jsq-tips {
    padding: .31rem .23rem .15rem .23rem;
    color: #777777;
  }
  .tips-btn2 {
    display: block;
    width: 1rem;
    border-bottom: solid 1px #fff;
  }
  @-webkit-keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes fadeInDown {
    from {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }
  @-webkit-keyframes fadeIn {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  @keyframes fadeIn {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }
  .fadeIn{
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .top_tips{
    position: fixed;
    left: 50%;
    top: 0;
    transform: translate(-50%,0);
    z-index: 1;
    text-align: center;
  }
  .top_tips_block{
    font-size: .15rem;
    line-height: .4rem;
    width: 3rem;
    height: .4rem;
    background-color: blanchedalmond;
    color: #000;
  }
</style>
