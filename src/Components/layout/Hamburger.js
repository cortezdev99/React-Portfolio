import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { showNavToggle } from '../../store/actions/showNavActions'

class Hamburger extends Component {
  render() {
    const { showNavToggle, showNav, darkmode } = this.props
    console.log(showNav)
    if (!darkmode) {
      return (
        showNav ? (
          <div className='hamburger-container' onClick={() => showNavToggle()}>
            <span className='line top showing-top'>-</span>
            <span className='line middle showing-middle'>-</span>
            <span className='line bottom showing-bottom'>-</span>
          </div>
        ) : (
          <div className='hamburger-container' onClick={() => showNavToggle()}>
            <span className='line top'>-</span>
            <span className='line middle'>-</span>
            <span className='line bottom'>-</span>
          </div>
        )
      )
    } else {
      return (
        showNav ? (
          <div className='hamburger-container dark-hamburger-container' onClick={() => showNavToggle()}>
            <span className='line top showing-top dark-line dark-showing-top'>-</span>
            <span className='line middle showing-middle dark-line dark-showing-middle'>-</span>
            <span className='line bottom showing-bottom dark-line dark-showing-bottom'>-</span>
          </div>
        ) : (
          <div className='hamburger-container dark-hamburger-container' onClick={() => showNavToggle()}>
            <span className='line top dark-line'>-</span>
            <span className='line middle dark-line'>-</span>
            <span className='line bottom dark-line'>-</span>
          </div>
        )
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    showNav: state.showNav.showNav,
    darkmode: state.darkmode.darkmode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showNavToggle: () => dispatch(showNavToggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)
