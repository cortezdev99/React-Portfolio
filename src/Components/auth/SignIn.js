import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import image from '../../images/signinImages/login.jpg'
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
    const { authError, auth, darkmode } = this.props

    if (auth.uid) {
      return <Redirect to='/' />
    }

    if (!darkmode) {
      return (
        <div className='sign-in__container'>
  
          <div className="sign-in__image" style={{backgroundImage: "url(" + image + ")"}} />
  
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
              { authError ? <div className='error'>{authError}</div> : null }
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <div className='sign-in__container dark-sign-in__container'>
  
          <div className="sign-in__image" style={{backgroundImage: "url(" + image + ")"}} />
  
          <form onSubmit={this.handleSubmit}>
            <div className='sign-in__inputs dark-sign-in__inputs'>
              <div className='sign-in__input dark-sign-in__input'>
                <input type='email' placeholder='Email' id='email' onChange={this.handleChange} />
              </div>
  
              <div className='sign-in__input'>
                <input type='password' placeholder='Password' id='password' onChange={this.handleChange} />
              </div>
            </div>
  
            <div className='sign-in__button dark-sign-in__button'>
              <button>Sign In!</button>
              { authError ? <div className='error'>{authError}</div> : null }
            </div>
          </form>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
    darkmode: state.darkmode.darkmode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: creds => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)