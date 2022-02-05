const Sequelize = require('sequelize')

const isTestEnv = process.env.NODE_ENV === 'test'

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: 'sqlite',
  storage: isTestEnv ? ':memory:' : './db.sqlite',
  logging: false,
})

module.exports = sequelize
