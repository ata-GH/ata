import Vue from 'vue'
import App from './App'
import router from './router'
import WX from 'weixin-js-sdk'

// import {GET} from "./api/getData";
Vue.config.productionTip = false;
Vue.prototype.$wx = WX;
router.beforeEach((to, from, next) => {
    next();
    return;
  /*if (to.fullPath !== '/') {
    try {
      GET('/backstage/is_authenticated/').then((res) => {
        if (parseInt(res.code) === 0 && res.is_authenticated) {
          store.commit('saveAdminStatus', {username: res.username, status: res.is_authenticated});
          // this.saveAdminStatus({username: res.username, status: res.is_authenticated});
          next()
        } else {
          next('/')
        }
      });
    } catch (e) {
      next('/')
    }
  } else {
    next();
  }*/
});
new Vue({
  el: '#app',
  data() {
    return {}
  },
  router,
  template: '<App/>',
  components: {App}
});
