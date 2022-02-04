import React from 'react'

const Footer: React.FC = () => {
  return (
    <div>
      <footer
        className="footer p-2"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        }}
      >
        <div className="text-left">
          © Copyright 2022 and beyond: &nbsp;
          <a
            className="text-dark"
            href="https://www.linkedin.com/in/ashish-karki/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ashish Karki
          </a>
        </div>

        <div className="text-right">
          <a
            className="text-left"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            English
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            className="text-right"
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elvish (just kidding..)
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
