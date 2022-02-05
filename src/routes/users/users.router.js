const express = require('express')
const { StatusCodes } = require('http-status-codes')
const bcrypt = require('bcrypt')

const { URI_PATHS, RESPONSE_MESSAGES } = require('../../../constants')
const User = require('../../models/User/User.model')

const router = express.Router()

// endpoints
router.get('/', (req, res) => {
  res.send('Hello from Users route')
})

router.post(URI_PATHS.REGISTER, async (req, res) => {
  const { email, password } = req.body

  // basic validation
  if (!email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: RESPONSE_MESSAGES.USER_REGISTRATION_MISSING_FIELDS,
    })
  }

  try {
    // hey, hash the password man...
    const hashedPw = await bcrypt.hash(password, 10)

    const createdUser = await User.create({ email, hashedPw })

    res.status(StatusCodes.CREATED).json({
      message: RESPONSE_MESSAGES.USER_REGISTERED,
      user: createdUser,
    })
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: RESPONSE_MESSAGES.USER_REGISTRATION_FAILED,
    })
  }
})

module.exports = router
