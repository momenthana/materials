import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    online: false,
    drawer: false,
    dialog: false,
    server: localStorage.getItem('server'),
    token: localStorage.getItem('token'),
    group: null,
    groupItems: null,
    node: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
