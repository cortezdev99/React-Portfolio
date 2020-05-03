import React, { Component } from 'react'
import { connect } from 'react-redux'

import DeleteFeedback from './DeleteFeedback'

class SummaryFeedback extends Component {
  render() {
  const { feedback, darkmode } = this.props

    if (!darkmode) {
      return (
        <div className='summaryFeedback-container'>
          <div className='summaryFeedback-container__title'>
            {feedback.title}
          </div>
  
          <div className='summaryFeedback-container__reason'>
            {feedback.reason}
          </div>
  
          <div className="summaryFeedback-container__delete">
            <DeleteFeedback id={feedback.id} />
          </div>
        </div>
      )
    } else {
      return (
        <div className='summaryFeedback-container dark-summaryFeedback-container'>
          <div className='summaryFeedback-container__title'>
            {feedback.title}
          </div>
  
          <div className='summaryFeedback-container__reason'>
            {feedback.reason}
          </div>
  
          <div className="summaryFeedback-container__delete">
            <DeleteFeedback id={feedback.id} />
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

export default connect(mapStateToProps)(SummaryFeedback)
