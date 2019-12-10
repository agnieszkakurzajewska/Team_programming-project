import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import './components/firebaseInit'

Vue.config.productionTip= false;

let app;
firebase.auth().onAuthStateChanged(function(user) {
  if (!app) {
    app = new Vue({
      vuetify,
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
      render: h => h(App)
    });
  }
});

