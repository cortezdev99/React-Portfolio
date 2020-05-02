import React, { Component } from 'react'
import { getFirestore } from 'redux-firestore'


class DeleteFeedback extends Component {
  render() {
    const { id } = this.props

    const handleDeleteDoc = () => {
      const firestore = getFirestore()
      firestore.collection("feedback").doc(`${id}`).delete().then(() => {
        console.log('successfully deleted')
      }).catch((err) => {
        console.log(err)
      })
    }

      return (
        <div className="delete">
          <button onClick={() => handleDeleteDoc()}>Delete</button>
        </div>
      )
    }
  }
  
  export default DeleteFeedback