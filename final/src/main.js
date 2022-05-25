import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueGeolocationApi from 'vue-geolocation-api'
import VueResponsiveImage from 'vue-responsive-image'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue, BootstrapVueIcons)
Vue.use(VueGeolocationApi)
Vue.use(VueResponsiveImage)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
