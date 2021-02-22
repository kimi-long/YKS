import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
// import global_ from './global/global'//引用文件
import Vant from 'vant';
import 'vant/lib/index.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/fontIcon/iconfont.css'
import 'babel-polyfill';
require('es6-promise').polyfill();
import 'fetch-detector';
import 'fetch-ie8';
import $ from 'jquery'
import {getJsonResource,} from "@/api/getData";
import { getLocal,getStore } from '@/config/mUtils';

// 在入口文件中（main.js），导入组件库
import vueHashCalendar from 'vue-hash-calendar'
// 引入组件CSS样式
import 'vue-hash-calendar/lib/vue-hash-calendar.css'
// 注册组件库


let Base64 = require('js-base64').Base64;
Vue.config.productionTip = false;
//
// //获取语言资源包
// Vue.prototype.getLanguageResource = async function (){
//     const crs = await getJsonResource();
//     if(crs.Flag){
//         cn.message = Object.assign({},cn.message, crs.Result.zh-cn);
//         en.message = Object.assign({},en.message, crs.Result.en-us);
//
//         if (getLocal('language') == 'zh-cn') {
//             this.$i18n.locale = "cn";
//         }
//         if (getLocal('language') == 'en-us') {
//             this.$i18n.locale = "en";
//
//         } else {
//             this.$i18n.locale = "cn";
//         }
//     }
// }
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})
Vue.use(Vant);
Vue.use(ElementUI);
Vue.use(vueHashCalendar)
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
