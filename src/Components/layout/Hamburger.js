import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { showNavToggle } from '../../store/actions/showNavActions'

class Hamburger extends Component {
  render() {
    const { showNavToggle, showNav, darkmode } = this.props
    if (!darkmode) {
      return (
        showNav ? (
          <div className='hamburger-container' onClick={() => showNavToggle()}>
            <FontAwesomeIcon icon='times' />
          </div>
        ) : (
          <div className='hamburger-container' onClick={() => showNavToggle()}>
            <FontAwesomeIcon icon="bars" />
          </div>
        )
      )
    } else {
      return (
        showNav ? (
          <div className='hamburger-container dark-hamburger-container' onClick={() => showNavToggle()}>
            <FontAwesomeIcon icon='times' />
          </div>
        ) : (
          <div className='hamburger-container dark-hamburger-container' onClick={() => showNavToggle()}>
            <FontAwesomeIcon icon="bars" />
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
