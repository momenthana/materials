import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    server: localStorage.getItem('server'),
    token: localStorage.getItem('token'),
    group: null,
    groupItems: null,
    node: null,
    drawer: false,
    dialog: false
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
