import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createFeedback } from '../../store/actions/feedbackActions'
import bannerImage from '../../images/feedbackImages/bannerImage4.jpg'
import darkImage from '../../images/feedbackImages/darkBanner2.jpg'

class Feedback extends Component {
  constructor() {
    super()

    this.state = {
      title: "",
      reason: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createFeedback(this.state)
  }

  render() {
    const { sent, err, darkmode } = this.props

    if (!darkmode) {
      return (
        <div className="feedback-container">
  
          <div className='feedback-container__banner-image' style={{backgroundImage: "url(" + bannerImage + ")"}} />
  
          <div className='feedback-container__header'>
            <div className='line'>What do you like/dislike about my portfolio? <br /> Leave feedback!</div>
          </div>
  
          { sent ? (
            <div className='feedback-container__submitted'><div className='thanks'>Thank You!</div></div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className='feedback-container__inputs'>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  onChange={this.handleChange}
                />
  
                <input
                  type="text"
                  id="reason"
                  placeholder="Reason"
                  onChange={this.handleChange}
                />
              </div>
  
              <div className="feedback-container__button">
                <button>Submit</button>
                { err ? <div className='error'>{err}</div> : null}
              </div>
            </form>
          )}
        </div>
      )
    } else {
      return (
        <div className="feedback-container dark-feedback-container">
  
          <div className='feedback-container__banner-image' style={{backgroundImage: "url(" + darkImage + ")"}} />
  
          <div className='feedback-container__header dark-feedback-container__header'>
            <div className='line'>What do you like/dislike about my portfolio? <br /> Leave feedback!</div>
          </div>
  
          { sent ? (
            <div className='feedback-container__submitted dark-feedback-container__submitted'><div className='thanks'>Thank You!</div></div>
          ) : (
            <form onSubmit={this.handleSubmit}>
              <div className='feedback-container__inputs dark-feedback-container__inputs'>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  onChange={this.handleChange}
                />
  
                <input
                  type="text"
                  id="reason"
                  placeholder="Reason"
                  onChange={this.handleChange}
                />
              </div>
  
              <div className="feedback-container__button dark-feedback-container__button">
                <button>Submit</button>
                { err ? <div className='error'>{err}</div> : null}
              </div>
            </form>
          )}
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    sent: state.feedback.sent,
    err: state.feedback.err,
    darkmode: state.darkmode.darkmode
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFeedback: (feedback) => dispatch(createFeedback(feedback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
