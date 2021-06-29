import Vue from "vue";
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vueaxios from '../package.json'
import axios from '../package.json'


Vue.config.productionTip = false
Vue.use(Vueaxios,axios)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
