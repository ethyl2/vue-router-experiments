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
  {
    path: '/json',
    component: require('./components/JsonPlaceholder.vue').default,
  },
  {
    path: '/make-image',
    component: require('./components/Html2Canvas.vue').default,
  },
];
export default new VueRouter({
  routes,
  linkActiveClass: 'is-active',
});
