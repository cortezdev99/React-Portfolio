import React, { Component } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import FeedbackList from './FeedbackList'
import bannerImage from '../../images/feedbackImages/bannerImage5.jpg'

class RecievedFeedback extends Component {
  render() {
    const { feedbacks } = this.props
    return (
      <div className='recievedFeedback-container'>

        <div className='contact-container__banner-image' style={{backgroundImage: "url(" + bannerImage + ")"}} />

        <div className='contact-container__header'>
          <div className='line'>Recieved Feedback</div>
        </div>

         <FeedbackList feedbacks={feedbacks} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    feedbacks: state.firestore.ordered.feedback
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'feedback' }
  ])
)(RecievedFeedback)