import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignedOutLinks from '../auth/SignedOutLinks'
import image from '../../images/headshotImages/newheadshot.jpg'

export class Navbar extends Component {
  render() {
    return (
      <div className='navbar-container'>
        <div className="navbar-container__image">
          <img src={image} alt="headshot"/>
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

const mapStateToProps = (state) => {
  console.log(state)
  return {

  }
}

export default connect(mapStateToProps)(Navbar)
