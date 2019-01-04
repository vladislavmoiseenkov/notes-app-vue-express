const path = require('path')

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'notes',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASS || 'admin',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.DIALECT || 'localhost',
      storage: path.resolve(__dirname, '../../notes.sqlite')
    }
  },
  authentacation: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
