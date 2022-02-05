const Sequelize = require('sequelize')

const sequelize = require('../../config/db-config')

// create the model
const Model = Sequelize.Model

class User extends Model {}

User.init(
  {
    // attributes
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
  },
  {
    // options
    sequelize,
    modelName: 'User',
  }
)

module.exports = User
