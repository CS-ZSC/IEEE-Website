import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import event from './Event.vue'
import {BootstrapVue,BootstrapVueIcons} from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
// App.AOS = new AOS.init({ disable: "phone" });
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
// Vue.use(AOS)
import './plugins/bootstrap-vue'
// import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import  {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false
new Vue({
  el: '#app',
  created () {
    AOS.init()
  },
  render: h => h(event)
})


//   created()
//     AOS.init();
//   },
//   router,
//   render: h => h(App)
// }).$mount('#app')

