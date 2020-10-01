import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import App from './App.vue'
import router from './routes';
import './assets/sass/main.scss';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
