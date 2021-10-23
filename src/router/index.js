import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Profile from '../components/Profile.vue'

const routes = [
  {
    path: '/', component: HelloWorld
  },
  {
    path: '/about', component: Profile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
