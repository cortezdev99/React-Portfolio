import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createFeedback } from '../../store/actions/feedbackActions'

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
    const { sent, err } = this.props
    return (
      <div className="feedback-container">
        { sent ? (
          "Thank You!"
        ) : (
          <form onSubmit={this.handleSubmit}>
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

            <div className="feedback-container__button">
              <button>Submit</button>
              { err ? <div className='error'>{err}</div> : null}
            </div>
          </form>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sent: state.feedback.sent,
    err: state.feedback.err
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createFeedback: (feedback) => dispatch(createFeedback(feedback))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feedback)
