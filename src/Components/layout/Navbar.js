import React, { Component } from 'react'
import { connect } from 'react-redux'

import SignedOutLinks from '../auth/SignedOutLinks'
import image from '../../images/headshotImages/newheadshot.jpg'
import SignedInLinks from '../auth/SignedInLinks'

export class Navbar extends Component {
  render() {
    const { auth } = this.props
    return (
      <div className='navbar-container'>
        <div className="navbar-container__image">
          <img src={image} alt="headshot"/>
        </div>

        <div className="navbar-container__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>

        <div className="navbar-container__links">
          { auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
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
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
