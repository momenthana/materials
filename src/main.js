import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import router from './router'
import VueClipboard from 'vue-clipboard2'

Vue.config.productionTip = false

Vue.use(VueClipboard)

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
