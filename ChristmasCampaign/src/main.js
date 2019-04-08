import Vue from 'vue'
import App from './App'
import router from './router'
import WX from 'weixin-js-sdk'

import {GET} from "./api/getData";
Vue.config.productionTip = false;
Vue.prototype.$wx = WX;
router.beforeEach((to, from, next) => {
  // next();
  // return;
  if (to.name !== 'last') {
    try {
      GET('?a=haveFilledForm').then((res) => {
        if (res.code === 0) {
          next({name: 'last', params: {id: res.data.gift, result: res.data.bz}})
        } else {
          next();
        }
      });
    } catch (e) {
      next()
    }
  } else {
    next();
  }
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
