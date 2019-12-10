import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import UserAccount from '@/components/UserAccount'
import AddJourney from '@/components/AddJourney'
import Community from '@/components/Community'
import Favourites from '@/components/Favourites'
import Journeys from '@/components/Journeys'
import Login from '@/components/Login'
import Register from '@/components/Register'
import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import ProfilePage from "../components/ProfilePage";
import PhotoGallery from "../components/PhotoGallery";

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/user-account',
      name: 'UserAccount',
      component: UserAccount,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add-journey',
      name: 'AddJourney',
      component: AddJourney,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/community',
      name: 'Community',
      component: Community,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/favourites',
      name: 'Favourites',
      component: Favourites,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/journeys',
      name: 'Journeys',
      component: Journeys,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile-page',
      name: 'ProfilePage',
      component: ProfilePage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/photo-gallery',
      name: 'PhotoGallery',
      component: PhotoGallery,
      meta: {
        requiresAuth: true
      }
    }
  ],

});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;