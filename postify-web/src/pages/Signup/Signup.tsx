import React, { useState } from 'react'
import axios from 'axios'
import { REACT_APP_BASE_URI } from '../../constants'

const Signup: React.FC = () => {
  const [signupState, setSignupState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    // console.log(`Signup => handleChange => ${name}: ${value}`)

    setSignupState({ ...signupState, [name]: value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(`Signup => handleSubmit: ${JSON.stringify(signupState)}`)

    event.preventDefault()

    // http://localhost:5001/api/v1/users/register
    const newUser = await axios.post(`${REACT_APP_BASE_URI}/register`, signupState)
    console.log(`Signup => handleSubmit: ${JSON.stringify(newUser.data)}`)
  }

  return (
    <div
      style={{
        margin: '2rem auto',
        maxWidth: '500px',
      }}
    >
      <h2>Login using email and password</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '40vh',
        }}
      >
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={signupState.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={signupState.password}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm password"
            name="confirmPassword"
            value={signupState.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  )
}

export default Signup
