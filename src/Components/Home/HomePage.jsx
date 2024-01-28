import React from 'react'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>IDHS- Indian Digital Health Solutions</h1>
        <p>
          Welcome to our startup! We are passionate about creating amazing
          products that make a difference.
        </p>
        <span>
        <input placeholder='enter your email'/>
        <button>Subscribe</button>
        </span>
        
      </div>
    </div>
  )
}

export default HomePage