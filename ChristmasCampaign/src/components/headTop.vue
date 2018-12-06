<template>
  <div>
  <!--<div class="header_block">-->
    <div class="header_content">
      <img class="logo" src="../assets/images/logo.png"/><i></i>
      <div>
        <router-link to="/systemMessage" tag="a">
          <el-badge :value="count" class="item">
            <el-button type="text" class="share-button icon add-iconfont add-icon-xiaoxi"></el-button>
          </el-badge>
        </router-link>
        <el-dropdown @command="handleCommand" style="margin-left: 15px;">
          <span class="el-dropdown-link">
          {{adminInfo.username}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="home">修改密码</el-dropdown-item>
            <el-dropdown-item command="singout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <!-- 解禁用户弹层 -->
    <el-dialog class="el-dialog-add_top" title="修改密码" :visible="rp_mask" center :before-close="handleClose">
      <el-form :model="rp_obj" :rules="rules" ref="rp_mask">
        <div class="el-form-item">
          <label class="el-form-item__label">帐户名：</label>
          <div class="el-form-item__content">
            <div class="el-input" style="text-align: left;">{{adminInfo.username}}</div>
          </div>
        </div>
        <el-form-item label="原密码：" :error="rp_obj_errors.password" prop="password">
          <el-input style="text-align: left;" type="password" placeholder="请输入原密码" autoComplete="off" v-model="rp_obj.password"></el-input>
          <i class="el-icon-circle-close el-input__icon close-for-password" @click="handleIconClick('password')"></i>
          <p class="f_rp">忘记密码</p>
        </el-form-item>
        <el-form-item label="新密码：" :error="rp_obj_errors.new_password" prop="new_password">
          <el-input style="text-align: left;" type="password" placeholder="请输入新密码" autoComplete="off" v-model="rp_obj.new_password"></el-input>
          <i class="el-icon-circle-close el-input__icon close-for-new_password" @click="handleIconClick('new_password')"></i>
          <ul class="inlineBlock">
            <li class="s_tips_item">
              <i :class="password_secret === 'notSafe'? 'notSafe' : ''"></i>
              <em>不安全</em>
            </li>
            <li class="s_tips_item">
              <i :class="password_secret === 'normalSafe'? 'normalSafe' : ''"></i>
              <em>一般</em>
            </li>
            <li class="s_tips_item">
              <i :class="password_secret === 'safe'? 'safe' : ''"></i>
              <em>很安全</em>
            </li>
          </ul>
        </el-form-item>
        <el-form-item label="确认新密码：" :error="rp_obj_errors.password_verify" prop="password_verify">
          <el-input style="text-align: left;" type="password" placeholder="确认新密码" autoComplete="off" v-model="rp_obj.password_verify"></el-input>
          <i class="el-icon-circle-close el-input__icon close-for-password_verify" @click="handleIconClick('password_verify')"></i>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="submitUserStatus">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import {signout, POST, GET} from '@/api/getData'
  import {mapMutations, mapState,mapActions} from 'vuex'
  import {CryptoJS} from '@/config/md5'

  export default {
    data() {
      var validForm = (rule, value, callback) => {
        if (value.trim()) {
          document.getElementsByClassName('close-for-' + rule.field)[0].style.zIndex = 'auto';
        } else {
          document.getElementsByClassName('close-for-' + rule.field)[0].style.zIndex = -1;
        }
        if(rule.field === 'new_password'){
          if(!value || value.length <8 || value.length > 20){
            this.password_secret = ''
          }else if(/[0-9]/.test(value) && /[a-z]/.test(value) && /[A-Z]/.test(value)){
            this.password_secret = 'safe'
          } else if(/[0-9]/.test(value) && /[a-z]/i.test(value)){
            this.password_secret = 'normalSafe'
          } else{
            this.password_secret = 'notSafe'
          }
        }
        callback();
      };
      return {
        rp_mask: false,
        password_secret: '',
        rp_obj: {
          password: '',
          new_password: '',
          password_verify: ''
        },
        rp_obj_errors:{
          password: '',
          new_password: '',
          password_verify: ''
        },
        timer: '',
        xtTimer: '',
        rules: {
          password: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
            {required: true, min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'},
            {validator: validForm, trigger: 'change'}
          ],
          new_password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {required: true, min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'},
            {validator: validForm, trigger: 'change'}
          ],
          password_verify: [
            {required: true, message: '请输入验证码', trigger: 'blur'},
            {required: true, min: 8, max: 20, message: '长度在 8 到 20 个字符', trigger: 'blur'},
            {validator: validForm, trigger: 'change'}
          ]
        }
      }
    },
    created() {
      this.getSysMessage();
      this.xtTimerT = setInterval(()=>{
        this.getSysMessage();
      },600000)
    },
    computed: {
      ...mapState(['adminInfo', 'count']),
    },
    methods: {
      ...mapMutations(['mapMutations', 'saveCrfToken']),
      ...mapActions(['getSystemCount']),
      async handleCommand(command) {
        if (command == 'home') {
          this.rp_mask = true;
        }
        else if (command == 'singout') {
          const res = await signout();
          if (parseInt(res.code) === 0) {
            this.$message({
              type: 'success',
              message: res.msg
            });
            this.$router.push('/');
            this.mapMutations({username: '', status: false});
          } else {
            this.$message({
              type: 'error',
              message: res.msg
            });
          }
        }
      },
      /* 重置密码 */
      async submitUserStatus() {
        this.$refs['rp_mask'].validate(async (valid) =>{
          if (valid) {
            if(this.rp_obj.new_password !== this.rp_obj.password_verify){
              this.rp_obj_errors.password_verify = '两次密码输入不一致';
              return;
            }
            const res = await POST('/backstage/reset-password/', {
              'password': encodeURIComponent(this.crypto(this.rp_obj.password)),
              'new_password': encodeURIComponent(this.crypto(this.rp_obj.new_password)),
              'password_verify': encodeURIComponent(this.crypto(this.rp_obj.password_verify))
            });
            const code = parseInt(res.code);
            if (code === 0) {
              this.rp_mask = false;
              this.$message.success(res.msg);
              return;
            } else if (code === 2) {
              ({
                password: this.rp_obj_errors.password,
                new_password: this.rp_obj_errors.new_password,
                password_verify: this.rp_obj_errors.password_verify
              } = res.errors);
            }
            this.getToken();
          }
        })
      },
      /* 关闭弹层 */
      handleIconClick(arg) {
        this.rp_obj[arg] = '';
        document.getElementsByClassName('close-for-' + arg)[0].style.zIndex = -1;
      },
      handleClose() {
        this.rp_mask = false;
        this.rp_obj.password = '';
        this.rp_obj.new_password = '';
        this.rp_obj.password_verify = '';
        document.querySelectorAll('.el-dialog-add_top .el-icon-circle-close').forEach((val)=>{
          val.style.zIndex = -1;
        });
        this.$refs['rp_mask'].resetFields();
      },
      /* 找回密码 */
      async resetPassword() {
        this.backendErrors.username = '';
        this.backendErrors.password = '';
        this.backendErrors.captcha = '';
        if (!this.timer || (Date.now() - this.timer) > 60000) {
          try{
            const res = await POST('/backstage/retrieve-password/',{username:this.loginForm.username});
            if (parseInt(res.code) === 0) {
              this.$message('新密码已经发送到您的邮箱，请登录邮箱查看获取');
              this.timer = Date.now();
            } else if(parseInt(res.code) !== 2) {
              this.backendErrors.username = res.errors.username;
            }else {
              this.$message.error(res.msg);
            }
          }
          catch (e) {
            this.$message('未知错误，请刷新页面重试');
          }
        }
        else {
          this.$message('您的操作频率过高，请稍后再试哦。');
        }
      },
      /* 获取系统未读消息数 */
      async getSysMessage(){
        this.getSystemCount();
      },
      /* 加密函数 */
      crypto(value) {
        return CryptoJS.AES.encrypt(
          value, CryptoJS.enc.Utf8.parse('<>?:"{}|,./;\'[]\\'),
          {iv:CryptoJS.enc.Utf8.parse('~!@#$%^&*()_+{:"'), mode:CryptoJS.mode.CBC, padding:CryptoJS.pad.Pkcs7}
        ).toString();
      },
      /* 更新token */
      async getToken(){
        const token =  await GET('/backstage/get_csrf_token/');
        this.saveCrfToken(token.csrf_token);
      }
    },
    destroyed(){
      clearInterval(this.xtTimerT);
    }
  }
</script>

<style lang="less">
  /*@import '../style/mixin';*/
  .header_block {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 #E3E3E3;
    height: 70px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
  }
  .header_content {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    .logo {
      height: 33px;
    }
  }
  .share-button {
    color: #333;
    font-size: 26px;
    padding: 0;
  }
  .el-dropdown-menu__item {
    text-align: center;
  }
  .el-badge__content {
    background-color: #4A90E2;
  }
  .el-dialog-add_top{
    .el-dialog {
      width: 600px;
    }
    .el-dialog__header{
      text-align: left;
    }
    .el-input{
      width: 240px;
    }
    .el-form-item__label{
      width: 120px;
      text-align: right;
    }
    .el-icon-circle-close{
      position: absolute;
      margin-left: -30px;
      z-index: -1;
    }
    .el-form-item__error{
      text-indent: 120px;
    }
    .f_rp{
      display: inline-block;
      margin-left: 20px;
      color: #4A90E2;
    }
    .safe{
      background-color: #7ED321;
    }
    .notSafe{
      background-color: #D0021B;
    }
    .normalSafe{
      background-color: #F5A623;
    }
  }
  .s_tips_item{
    width: 36px;
    padding-left: 20px;
    display: inline-block;
    vertical-align: middle;
    i{
      display: block;
      width: 36px;
      height: 6px;
      background-color: #D8D8D8;
      border-radius: 3px 3px;
    }
    em{
      font-size: 12px;
      text-align: center;
    }
  }
</style>
