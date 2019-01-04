const {
  sequelize,
  Note,
  User
} = require('../models')

const Promise = require('bluebird')

const users = require('./users')
const notes = require('./notes')

sequelize.sync({ force: true })
  .then(async function () {
    await Promise.all(
      users.map(user => {
        User.create(user)
      })
    )
    await Promise.all(
      notes.map(note => {
        Note.create(note)
      })
    )
  })
