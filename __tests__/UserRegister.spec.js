const request = require('supertest')
const { StatusCodes } = require('http-status-codes')

const app = require('../src/app')
const { URI_PATHS, RESPONSE_MESSAGES } = require('../constants')
const User = require('../src/models/User/User.model')
const sequelize = require('../src/config/db-config')

const testEmail = 'abc@email.com'
const testPassword = 'P123#$xyz'
const testUserObject = {
  email: testEmail,
  password: testPassword,
}

describe('UserRegister =>', () => {
  beforeAll(async () => {
    await sequelize.sync() // initialize the DB
  })

  beforeEach(async () => {
    return await User.destroy({ truncate: true })
  })

  const postValidUser = async () => {
    return await request(app).post(`${URI_PATHS.API_V1}${URI_PATHS.USERS}${URI_PATHS.REGISTER}`).send(testUserObject)
  }

  // http://localhost:5001/api/v1/users/register
  it('returns 201 Created when correct signup request is sent', async () => {
    const resp = await postValidUser()

    expect(resp.status).toBe(StatusCodes.CREATED)
  })

  it('returns success message when correct signup request is sent', async () => {
    const response = await postValidUser()
    expect(response.body.message).toBe(RESPONSE_MESSAGES.USER_REGISTERED)
  })

  it('connects successfully to the DB when correct signup request is sent', async () => {
    await postValidUser()

    // query 'User' table
    const userList = await User.findAll()
    expect(userList.length).toBe(1)
  })

  it('saves the email field successfully to the DB when correct signup request is sent', () => {
    postValidUser().then((_response) => {
      // query 'User' table
      User.findAll().then((userList) => {
        expect(userList[0].email).toBe(testEmail)
      })
    })
  })

  it('saves the password field in hash version to the DB when correct signup request is sent', async () => {
    const response = await postValidUser()

    const users = await User.findAll()
    expect(users[0].password).not.toBe(testPassword)
  })

  afterAll(async () => {
    await User.destroy({ truncate: true })
    await sequelize.close()
  })
})
