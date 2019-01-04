const state = {
  token: null,
  user: null,
  loggedIn: false
}

const getters = {
  getUser (state) {
    return state.user
  }
}

const actions = {
  setToken ({ commit }, token) {
    commit('setToken', token)
  },
  setUser ({ commit }, user) {
    commit('setUser', user)
  }
}

const mutations = {
  setToken (state, token) {
    state.token = token
    if (token) {
      state.loggedIn = true
    } else {
      state.loggedIn = false
    }
  },
  setUser (state, user) {
    state.user = user
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
