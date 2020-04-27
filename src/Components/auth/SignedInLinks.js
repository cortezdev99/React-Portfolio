import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { signOut } from '../../store/actions/authActions'

class SignedInLinks extends Component {
  render() {
    return (
      <div className='signed-in-links'>
        <div className='signed-in-links__link'>
          <NavLink exact to='/'>Homepage</NavLink>
        </div>

        <div className='signed-in-links__link'>
          <NavLink exact to='/about'>About</NavLink>
        </div>

        <div className='signed-in-links__link'>
          <NavLink exact to='/contact'>Contact</NavLink>
        </div>

        <div className='signed-in-links__link'>
          <NavLink exact to='/create'>Create Project</NavLink>
        </div>

        <div className='signed-in-links__link'>
          <Link onClick={() => this.props.signOut()} to='/' >Logout</Link>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
