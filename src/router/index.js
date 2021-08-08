import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import CS from '../views/CS.vue'
import RAS from '../views/RAS.vue'
import Activities from '../views/Activities.vue'
import ContactUs from '../views/ContactUs.vue'
import MemberShip from '../views/MemberShip.vue'
import About from '../views/About.vue'
import event from '../views/Event.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/cs-committee',
    name: 'CS',
    component: CS
  },
  {
    path: '/ras-committee',
    name: 'RAS',
    component: RAS
  },
  {
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs
  },
  {
    path: '/member-ship',
    name: 'MemberShip',
    component: MemberShip
  },
  {
    path:'/event',
    name: 'event',
    component:event
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes,
})

export default router
