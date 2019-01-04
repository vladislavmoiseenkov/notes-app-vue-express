import Api from '@/services/Api'
import config from '@/config'

export default {
  getNotes (page) {
    return Api().get(`notes?page=${page}&limit=${config.limit}`)
  },
  create (noteData) {
    return Api().post('create', noteData)
  },
  getNoteById (id) {
    return Api().get(`getNoteById?id=${id}`)
  },
  edit (note) {
    return Api().put('edit', note)
  },
  deleteNote (note) {
    return Api().delete(`deleteNote?id=${note.id}`)
  }
}
