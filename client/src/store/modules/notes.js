import NotesService from '@/services/NotesService'

const state = {
  notes: [],
  count: null
}

const getters = {
  getNotes (state) {
    return {
      notes: state.notes,
      count: state.count
    }
  }
}

const actions = {
  setNotes ({ commit }, page = 1) {
    commit('setNotes', page)
  }
}

const mutations = {
  async setNotes (state, page) {
    state.notes = (await NotesService.getNotes(page)).data.notes.rows
    state.count = (await NotesService.getNotes(page)).data.notes.count
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
