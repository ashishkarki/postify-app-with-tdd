import React from 'react'

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        height: '80vh',

        margin: 'auto 1rem',
      }}
    >
      <div className="card bg-primary text-white">
        <h2 className="card-body">There are no Posts here!!</h2>
      </div>

      <div className="card bg-info text-white">
        <div className="card-body">
          <h3>Click on Login to view Posts</h3>
          <h4>or, if you are unregistered, click on SignUp</h4>
        </div>
      </div>
    </div>
  )
}

export default Home
