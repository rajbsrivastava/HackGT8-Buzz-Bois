import { createRouter, createWebHashHistory } from 'vue-router'
import CharityGrid from '../components/CharityGrid.vue'
import Profile from '../components/Profile.vue'
import Login from '../components/Login.vue'
import SignUp from '../components/SignUp.vue'


const routes = [
  {
    path: '/', component: CharityGrid
  },
  {
    path: '/login', component: Login
  },
  {
    path: '/sign-up', component: SignUp
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
