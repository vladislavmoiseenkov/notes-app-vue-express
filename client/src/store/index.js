import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

/* Modules */

import auth from './modules/auth'
import notes from './modules/notes'

/* Modules */

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {
    auth,
    notes
  },
  plugins: [createPersistedState()]
})
