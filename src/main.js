import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import MainPage from './components/MainPage'
import Community from './components/Community'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: MainPage},
  {path: '/community', component: Community}
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  vuetify,
  el: '#app',
  router,
  render: h => h(App)
});


