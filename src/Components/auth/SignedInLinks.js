import React, { Component } from 'react'

export class SignedInLinks extends Component {
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
      </div>
    )
  }
}

export default SignedInLinks
