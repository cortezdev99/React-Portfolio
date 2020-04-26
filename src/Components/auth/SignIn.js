import React, { Component } from 'react'
import { connect } from 'react-redux'

import { signIn } from '../../store/actions/authActions'

class SignIn extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.signIn(this.state)
  }

  render() {
    return (
      <div className='sign-in__container'>
        <form onSubmit={this.handleSubmit}>
          <div className='sign-in__inputs'>
            <div className='sign-in__input'>
              <input type='email' placeholder='Email' id='email' onChange={this.handleChange} />
            </div>

            <div className='sign-in__input'>
              <input type='password' placeholder='Password' id='password' onChange={this.handleChange} />
            </div>
          </div>

          <div className='sign-in__button'>
            <button>Sign In!</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: creds => dispatch(signIn(creds))
  }
}

export default connect(null, mapDispatchToProps)(SignIn)