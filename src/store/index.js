import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: localStorage.getItem('color') || '#9146ff',
    online: false,
    drawer: false,
    dialog: false,
    tab: 0,
    server: localStorage.getItem('server'),
    token: localStorage.getItem('token'),
    group: null,
    groupItems: null,
    node: null,
    nodeItems: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
