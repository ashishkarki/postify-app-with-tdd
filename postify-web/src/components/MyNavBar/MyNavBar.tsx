import React from 'react'
import { Link } from 'react-router-dom'
import { REACT_APP_PATH_NAMES } from '../../constants'

const MyNavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to={REACT_APP_PATH_NAMES.HOME}>
          POSTIFY
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={REACT_APP_PATH_NAMES.LOGIN}>
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={REACT_APP_PATH_NAMES.SIGNUP}>
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MyNavBar
