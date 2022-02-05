const URI_PATHS = {
  API_V1: '/api/v1',
  USERS: '/users',
  REGISTER: '/register',
}

const RESPONSE_MESSAGES = {
  USER_REGISTERED: 'User registered/created successfully',
  USER_REGISTRATION_MISSING_FIELDS: 'Email and password are required',
  USER_REGISTRATION_FAILED: 'User registration failed',
}

module.exports = {
  URI_PATHS,
  RESPONSE_MESSAGES,
}
