import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError (state, error) {
      state.error = error
    }
  },
  getters: {
    error: s => s.error
  },
  actions: {
  },
  modules: {
    auth
  }
})
