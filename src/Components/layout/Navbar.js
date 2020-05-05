import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SignedOutLinks from '../auth/SignedOutLinks'
import image from '../../images/headshotImages/newheadshot.jpg'
import SignedInLinks from '../auth/SignedInLinks'
import { darkmodeToggle } from '../../store/actions/darkmodeActions'

export class Navbar extends Component {

  render() {
    const { auth, darkmodeToggle, darkmode, showNav } = this.props

    // var element = document.getElementById("navbar-container")
    // if (showNav) {
    //   element.classList.toggle("show-nav")
    // } else {
    //   if (element) {
    //     element.classList.toggle("show-nav")
    //   } 
    // }

    if (!darkmode) {
      if (!showNav) {
        return (
          <div className='navbar-container' id='navbar-container'>
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
    
              <div className='dark-mode-toggle'>
                <div className='dark-mode-title'>Darkmode Off</div>
                <FontAwesomeIcon icon='toggle-off' className='dark-mode-toggle-toggle' onClick={() => darkmodeToggle()}/>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className='navbar-container show-nav' id='navbar-container'>
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
    
              <div className='dark-mode-toggle'>
                <div className='dark-mode-title'>Darkmode Off</div>
                <FontAwesomeIcon icon='toggle-off' className='dark-mode-toggle-toggle' onClick={() => darkmodeToggle()}/>
              </div>
            </div>
          </div>
        )
      }
    } else {
      if (!showNav) {
        return (
          <div className='navbar-container dark-navbar-container' id='navbar-container'>
            <div className="navbar-container__image dark-navbar-container__image">
              <img src={image} alt="headshot"/>
            </div>
    
            <div className="navbar-container__description dark-navbar-container__description">
              I'm looking for opportunities in Full-Stack Development, React-Development, and Front-End Development. I'm also currently diving into React Native as well as Flutter for Mobile Development.
            </div>
    
            <div className="navbar-container__links dark-navbar-container__links">
              { auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
    
            <div className="navbar-container__quick-links dark-navbar-container__quick-links">
              <a className="navbar-container__link dark-navbar-container__link" href="https://github.com/Macattack1999-teck">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
    
              <a className="navbar-container__link dark-navbar-container__link" href="https://www.linkedin.com/in/michael-cortez-9634781a1">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
    
              <a className="navbar-container__link dark-navbar-container__link" href="https://docs.google.com/document/d/1t-wWDeHOpuUgrK6V57rJeL6Q7obu6Vqt3Ktv01Fd8yw/edit?usp=sharing">
                Resume
              </a>
    
              <div className='dark-mode-toggle dark-dark-mode-toggle'>
                <div className='dark-dark-mode-title'>Darkmode On</div>
                <FontAwesomeIcon icon='toggle-off' className='dark-dark-mode-toggle-toggle' onClick={() => darkmodeToggle()}/>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className='navbar-container dark-navbar-container show-nav' id='navbar-container'>
            <div className="navbar-container__image dark-navbar-container__image">
              <img src={image} alt="headshot"/>
            </div>
    
            <div className="navbar-container__description dark-navbar-container__description">
              I'm looking for opportunities in Full-Stack Development, React-Development, and Front-End Development. I'm also currently diving into React Native as well as Flutter for Mobile Development.
            </div>
    
            <div className="navbar-container__links dark-navbar-container__links">
              { auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
            </div>
    
            <div className="navbar-container__quick-links dark-navbar-container__quick-links">
              <a className="navbar-container__link dark-navbar-container__link" href="https://github.com/Macattack1999-teck">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
    
              <a className="navbar-container__link dark-navbar-container__link" href="https://www.linkedin.com/in/michael-cortez-9634781a1">
                <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
              </a>
    
              <a className="navbar-container__link dark-navbar-container__link" href="https://docs.google.com/document/d/1t-wWDeHOpuUgrK6V57rJeL6Q7obu6Vqt3Ktv01Fd8yw/edit?usp=sharing">
                Resume
              </a>
    
              <div className='dark-mode-toggle dark-dark-mode-toggle'>
                <div className='dark-dark-mode-title'>Darkmode On</div>
                <FontAwesomeIcon icon='toggle-off' className='dark-dark-mode-toggle-toggle' onClick={() => darkmodeToggle()}/>
              </div>
            </div>
          </div>
        )
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    darkmode: state.darkmode.darkmode,
    showNav: state.showNav.showNav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    darkmodeToggle: () => dispatch(darkmodeToggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
