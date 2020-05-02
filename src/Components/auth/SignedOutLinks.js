import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

export class SignedOutLinks extends Component {
  render() {
    const { darkmode } = this.props
    
    if (!darkmode) {
      return (
        <div className='signed-out-links'>
          <div className='signed-out-links__link'>
            <NavLink exact to='/'>Homepage</NavLink>
          </div>
  
          <div className='signed-out-links__link'>
            <NavLink exact to='/about'>About</NavLink>
          </div>
  
          <div className='signed-out-links__link'>
            <NavLink exact to='/contact'>Contact</NavLink>
          </div>
  
          <div className='signed-out-links__link'>
            <NavLink exact to='/feedback'>Feedback</NavLink>
          </div>
        </div>
      )
    } else {
      return (
        <div className='signed-out-links dark-signed-out-links'>
          <div className='signed-out-links__link dark-signed-out-links__link'>
            <NavLink exact to='/'>Homepage</NavLink>
          </div>
  
          <div className='signed-out-links__link dark-signed-out-links__link'>
            <NavLink exact to='/about'>About</NavLink>
          </div>
  
          <div className='signed-out-links__link dark-signed-out-links__link'>
            <NavLink exact to='/contact'>Contact</NavLink>
          </div>
  
          <div className='signed-out-links__link dark-signed-out-links__link'>
            <NavLink exact to='/feedback'>Feedback</NavLink>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    darkmode: state.darkmode.darkmode
  }
}

export default connect(mapStateToProps)(SignedOutLinks)
