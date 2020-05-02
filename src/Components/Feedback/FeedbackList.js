import React from 'react'
import SummaryFeedback from './SummaryFeedback'

const FeedbackList = (props) => {
  const { feedbacks } = props
  return (
    <div className='feedbackList-container'>
      { feedbacks && feedbacks.map(feedback => {
        return <SummaryFeedback feedback={feedback} key={feedback.id} />
      })}
    </div>
  )
}

export default FeedbackList