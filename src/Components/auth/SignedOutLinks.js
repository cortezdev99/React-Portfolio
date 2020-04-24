import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class SignedOutLinks extends Component {
  render() {
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
      </div>
    )
  }
}

export default SignedOutLinks
