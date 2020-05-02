import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { signOut } from '../../store/actions/authActions'

class SignedInLinks extends Component {
  render() {
    const { darkmode } = this.props

    if (!darkmode) {
      return (
        <div className='signed-in-links'>
          <div className='signed-in-links__link'>
            <NavLink exact to='/'>Homepage</NavLink>
          </div>
  
          <div className='signed-in-links__link'>
            <NavLink exact to='/recieved'>Recieved Feedback</NavLink>
          </div>
  
          <div className='signed-in-links__link'>
            <NavLink exact to='/create'>Create Project</NavLink>
          </div>
  
          <div className='signed-in-links__link'>
            <Link onClick={() => this.props.signOut()} to='/' >Logout</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div className='signed-in-links dark-signed-in-links'>
          <div className='signed-in-links__link dark-signed-in-links__link'>
            <NavLink exact to='/'>Homepage</NavLink>
          </div>
  
          <div className='signed-in-links__link dark-signed-in-links__link'>
            <NavLink exact to='/recieved'>Recieved Feedback</NavLink>
          </div>
  
          <div className='signed-in-links__link dark-signed-in-links__link'>
            <NavLink exact to='/create'>Create Project</NavLink>
          </div>
  
          <div className='signed-in-links__link dark-signed-in-links__link'>
            <Link onClick={() => this.props.signOut()} to='/' >Logout</Link>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)
