import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

/* 进入页 */
const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
/* 选礼物页 */
const christmas = r => require.ensure([], () => r(require('@/page/christmas')), 'christmas');
/* 礼物出现页 */
const gift = r => require.ensure([], () => r(require('@/page/gift')), 'gift');
/* 答题页 */
const answer = r => require.ensure([], () => r(require('@/page/answer')), 'answer');
/* 答题结果显示页 */
const answerResult = r => require.ensure([], () => r(require('@/page/answerResult')), 'answerResult');
/* 礼物介绍页 */
const giftInfo = r => require.ensure([], () => r(require('@/page/giftInfo')), 'giftInfo');
/* 礼物包装盒现在页 */
const giftBZChoice = r => require.ensure([], () => r(require('@/page/giftBZChoice')), 'giftBZChoice');
/* 礼物地址表单填写页 */
const giftForm = r => require.ensure([], () => r(require('@/page/giftForm')), 'giftForm');
/* 游戏结束页 */
const last = r => require.ensure([], () => r(require('@/page/last')), 'last');

const routes = [
  {
    path: '/',
    component: index,
  },
  {
    path: '/christmas',
    component: christmas,
    name: 'christmas'
  }, {
    path: '/gift/:id',
    name: 'gift',
    component: gift,
  }, {
    path: '/answer/:id',
    name: 'answer',
    component: answer,
  }, {
    path: '/answerResult/:id/:result',
    name: 'answerResult',
    component: answerResult,
  }, {
    path: '/giftInfo/:id',
    name: 'giftInfo',
    component: giftInfo,
  }, {
    path: '/giftBZChoice/:id',
    name: 'giftBZChoice',
    component: giftBZChoice,
  }, {
    path: '/giftForm/:id/:result',
    name: 'giftForm',
    component: giftForm,
  }, {
    path: '/last/:id',
    name: 'last',
    component: last,
  }
];

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
