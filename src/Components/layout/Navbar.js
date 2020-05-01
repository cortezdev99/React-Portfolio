import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
          I'm looking for opportunities in Full-Stack Development, React-Development, and Front-End Development. I'm also currently diving into React Native as well as Flutter for Mobile Development.
        </div>

        <div className="navbar-container__links">
          { auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
        </div>

        <div className="navbar-container__quick-links">
          <a className="navbar-container__link" href="https://github.com/Macattack1999-teck">
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>

          <a className="navbar-container__link" href="https://www.linkedin.com/in/michael-cortez-9634781a1">
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </a>

          <a className="navbar-container__link" href="https://docs.google.com/document/d/1t-wWDeHOpuUgrK6V57rJeL6Q7obu6Vqt3Ktv01Fd8yw/edit?usp=sharing">
            Resume
          </a>
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
