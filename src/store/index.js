import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    server: null,
    token: null,
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
