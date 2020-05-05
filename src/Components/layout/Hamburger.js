import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { showNavToggle } from '../../store/actions/showNavActions'

class Hamburger extends Component {

  componentDidUpdate() {
    this.render(
      this.props.showNav ? (
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
  }


  render() {
    const { showNavToggle, showNav } = this.props
    console.log(showNav)


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
  }
}

const mapStateToProps = (state) => {
  return {
    showNav: state.showNav.showNav
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showNavToggle: () => dispatch(showNavToggle())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger)
