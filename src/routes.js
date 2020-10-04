import VueRouter from 'vue-router';

let routes = [
  {
    path: '/',
    component: require('./components/Home.vue').default,
  },
  {
    path: '/about',
    component: require('./components/About.vue').default,
  },
  {
    path: '/contact',
    component: require('./components/Contact.vue').default,
  },
];
export default new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});
