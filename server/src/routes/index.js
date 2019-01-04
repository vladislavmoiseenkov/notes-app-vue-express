// Controllers
const AuthenticationController = require('../controllers/AuthenticationController')
const NotesController = require('../controllers/NotesController')

// Policy (middleware)
const AuthenticationControllerPolicy = require('../policy/AuthenticationControllerPolicy')
const isAuthenticated = require('../policy/isAuthenticated')

module.exports = (app) => {
  app.post('/register', [AuthenticationControllerPolicy.register], AuthenticationController.register)
  app.post('/login', AuthenticationController.login)
  app.get('/notes', NotesController.getNotes)
  app.post('/create', [isAuthenticated], NotesController.createNote)
  app.get('/getNoteById', NotesController.getNoteById)
  app.put('/edit', [isAuthenticated], NotesController.edit)
  app.delete('/deleteNote', [isAuthenticated], NotesController.deleteNote)
}
