import Vue from 'vue'
import VueRouter from 'vue-router';
import VueHtml2Canvas from 'vue-html2canvas';
Vue.use(VueRouter);
Vue.use(VueHtml2Canvas);
import App from './App.vue'
import router from './routes';
import './assets/sass/main.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
