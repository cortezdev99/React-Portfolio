import React, { Component } from 'react'
import SignedOutLinks from '../auth/SignedOutLinks'

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <div className="navbar-container__image">
          <img src="http://via.placeholder.com/220x220" alt="headshot"/>
        </div>

        <div className="navbar-container__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div className="navbar-container__links">
          <SignedOutLinks />
        </div>

        <div className="navbar-container__quick-links">
          <div className="navbar-container__github">
            Github
          </div>

          <div className="navbar-container__linked-in">
            Linked In
          </div>

          <div className="navbar-container__resume">
            Resume
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
