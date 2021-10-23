import VueRouter from "vue-router";

import HelloWorld from './components/HelloWorld.vue'
import Profile from './components/Profile.vue'

const routes = [
    {
        path: '/',
        name: 'Launch',
        component: HelloWorld
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile,
      },
  ]

  export default new VueRouter({
    mode: "history",
    routes
  });