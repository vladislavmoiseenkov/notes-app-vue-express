const { Note, User } = require('../models')

module.exports = {
  async getNotes (req, res) {
    try {
      const { page, limit } = req.query

      const offset = +page === 1 ? 0 : (page - 1) * limit
      // const offset = (page - 1) * limit + 1

      const notes = await Note.findAndCount({
        limit: limit,
        offset: offset,
        include: [{
          model: User,
          attributes: ['id', 'email', 'username', 'createdAt', 'updatedAt']
        }]
      })

      return res.send({ notes })
    } catch (error) {
      console.error('error', error)
      res.status(500).send({
        message: error
      })
    }
  },
  async createNote (req, res) {
    try {
      const { title, description } = req.body
      const userId = req.body.user_id

      if (!title || !description || !userId) {
        return res.status(422).send({
          message: 'Unprocessable Entity'
        })
      }
      const note = await Note.create({ ...req.body })

      return res.send({ note: note.toJSON() })
    } catch (error) {
      return res.status(500).send({
        message: error
      })
    }
  },
  async getNoteById (req, res) {
    try {
      const id = req.query.id
      const note = await Note.findById(id, {
        include: [{
          model: User,
          attributes: ['id', 'email', 'username', 'createdAt', 'updatedAt']
        }]
      })
      if (!note) {
        return res.status(404).send({
          message: 'Not found!'
        })
      }
      return res.send({
        note: note.toJSON()
      })
    } catch (e) {
      return res.status(500).send({
        message: e
      })
    }
  },
  async edit (req, res) {
    try {
      const { note } = req.body
      await Note.update(note, {
        where: {
          id: note.id
        }
      })

      return res.send({
        note: note
      })
    } catch (e) {
      return res.status(500).send({
        message: e
      })
    }
  },
  async deleteNote (req, res) {
    try {
      const { id } = req.query
      const deletedNote = await Note.findOne({
        where: {
          id: id
        }
      })
      if (!deletedNote) {
        return res.status(403).send({
          message: 'You don\'t have access!'
        })
      }

      await deletedNote.destroy()

      return res.send({
        note: deletedNote.toJSON()
      })
    } catch (e) {
      return res.status(500).send({
        message: e
      })
    }
  }
}
