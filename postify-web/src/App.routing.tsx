import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import MyNavBar from './components/MyNavBar/MyNavBar'
import { REACT_APP_PATH_NAMES } from './constants'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Posts from './pages/Posts/Posts'
import Signup from './pages/Signup/Signup'

const AppRouting: React.FC = () => {
  return (
    <div>
      <MyNavBar />

      <Routes>
        <Route path={REACT_APP_PATH_NAMES.HOME} element={<Home />} />
        <Route path={REACT_APP_PATH_NAMES.LOGIN} element={<Login />} />
        <Route path={REACT_APP_PATH_NAMES.SIGNUP} element={<Signup />} />
        <Route path={REACT_APP_PATH_NAMES.POSTS} element={<Posts />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default AppRouting
