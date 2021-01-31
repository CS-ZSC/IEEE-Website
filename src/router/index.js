import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import CS from '../views/CS.vue'
import RAS from '../views/RAS.vue'
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import Activities from '../views/Activities.vue'
import ContactUs from '../views/ContactUs.vue'
=======
import MemberShip from '../views/MemberShip.vue'
import FrequentlyAskedQuestions from '../views/FrequentlyAskedQuestions.vue'
>>>>>>> Stashed changes
=======
import MemberShip from '../views/MemberShip.vue'
import FrequentlyAskedQuestions from '../views/FrequentlyAskedQuestions.vue'
>>>>>>> Stashed changes
=======
import MemberShip from '../views/MemberShip.vue'
import FrequentlyAskedQuestions from '../views/FrequentlyAskedQuestions.vue'
>>>>>>> Stashed changes

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    path: '/activities',
    name: 'Activities',
    component: Activities
  },
  {
    path: '/contact-us',
    name: 'Contact Us',
    component: ContactUs
  },
  
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    path: '/member-ship',
    name: 'MemberShip',
    component: MemberShip
  },
  {
    path: '/FAQ',
    name: 'FrequentlyAskedQuestions',
    component: FrequentlyAskedQuestions
  },

<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
