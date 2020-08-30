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
    printer: localStorage.getItem('printer'),
    group: null,
    groupItems: null,
    node: null,
    nodeItems: null,
    dialogItem: {
      img: null,
      title: null,
      name: null,
      description: null,
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
