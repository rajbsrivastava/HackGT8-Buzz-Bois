import { createRouter, createWebHashHistory } from 'vue-router'
//import HelloWorld from '../components/HelloWorld.vue'
import Profile from '../components/Profile.vue'

const routes = [
  {
    path: '/', component: Profile
  },
  {
    path: '/about', component: {template: "<h1>profile or whatever</h1>"}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
