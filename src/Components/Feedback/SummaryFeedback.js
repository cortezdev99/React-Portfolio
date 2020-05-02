import React from 'react'
import DeleteFeedback from './DeleteFeedback'

const SummaryFeedback = (props) => {
  const { feedback } = props
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
}

export default SummaryFeedback
