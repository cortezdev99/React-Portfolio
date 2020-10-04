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

    if (!darkmode) {
      if (!showNav) {
        return (
          <div className='navbar-container' id='navbar-container'>
            <div className="navbar-container__image">
              <img src={image} alt="headshot"/>
            </div>
    
            <div className="navbar-container__description">
              I'm looking for opportunities in Full-Stack Development, React-Development, Front-End Development, and React-Native Development. Open to freelance opportunities as well.
            </div>
    
            <div className="navbar-container__links">
              { auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
            </div>

            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Macattack1999-teck"><FontAwesomeIcon className="github" icon={["fab", "github"]} /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-cortez-9634781a1"><FontAwesomeIcon className="linked-in" icon={["fab", "linkedin-in"]} /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DAEJhkYHyqg/c7JkqT3rWyu39yad0m6l7w/view?utm_content=DAEJhkYHyqg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><div className="resume">Resume</div></a></li>
              <li><div onClick={() => darkmodeToggle()} className="dark-mode-btn"><div className="dark-mode"><div className="dark-mode-text">Darkmode</div>Off</div></div></li>
            </ul>
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

            <ul>
              <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Macattack1999-teck"><FontAwesomeIcon className="github" icon={["fab", "github"]} /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-cortez-9634781a1"><FontAwesomeIcon className="linked-in" icon={["fab", "linkedin-in"]} /></a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DAEJhkYHyqg/c7JkqT3rWyu39yad0m6l7w/view?utm_content=DAEJhkYHyqg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><div className="resume">Resume</div></a></li>
              <li><div onClick={() => darkmodeToggle()} className="dark-mode-btn"><div className="dark-mode"><div className="dark-mode-text">Darkmode</div>Off</div></div></li>
            </ul>
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

            <ul>
              <li><a className="dark-button" target="_blank" rel="noopener noreferrer" href="https://github.com/Macattack1999-teck"><FontAwesomeIcon className="github dark-github" icon={["fab", "github"]} /></a></li>
              <li><a className="dark-button" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-cortez-9634781a1"><FontAwesomeIcon className="linked-in dark-linked-in" icon={["fab", "linkedin-in"]} /></a></li>
              <li><a className="dark-button" target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DAEJhkYHyqg/c7JkqT3rWyu39yad0m6l7w/view?utm_content=DAEJhkYHyqg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><div className="resume dark-resume">Resume</div></a></li>
              <li><div onClick={() => darkmodeToggle()} className="dark-mode-btn dark-button"><div className="dark-mode dark-dark-mode"><div className="dark-mode-text dark-text">Darkmode</div>On</div></div></li>
            </ul>
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
    
            <ul>
              <li><a className="dark-button" target="_blank" rel="noopener noreferrer" href="https://github.com/Macattack1999-teck"><FontAwesomeIcon className="github dark-github" icon={["fab", "github"]} /></a></li>
              <li><a className="dark-button" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-cortez-9634781a1"><FontAwesomeIcon className="linked-in dark-linked-in" icon={["fab", "linkedin-in"]} /></a></li>
              <li><a className="dark-button" target="_blank" rel="noopener noreferrer" href="https://www.canva.com/design/DAEJhkYHyqg/c7JkqT3rWyu39yad0m6l7w/view?utm_content=DAEJhkYHyqg&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"><div className="resume dark-resume">Resume</div></a></li>
              <li><div onClick={() => darkmodeToggle()} className="dark-mode-btn dark-button"><div className="dark-mode dark-dark-mode"><div className="dark-mode-text dark-text">Darkmode</div>On</div></div></li>
            </ul>
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
