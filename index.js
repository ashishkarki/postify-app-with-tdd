const dotenv = require('dotenv')

// Load environment variables from .env file
dotenv.config({ path: '.env' })

// sequelize - sync the DB
const sequelize = require('./src/config/db-config')
sequelize.sync()

const app = require('./src/app')

const PORT = process.env.EXPRESS_PORT || 5001
app.listen(PORT, () => {
  console.log(`Postify Server is running on port ${PORT}`)
})
