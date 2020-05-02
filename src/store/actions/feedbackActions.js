export const createFeedback = (feedback) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('feedback').add({
      ...feedback
    }).then(() => {
      dispatch({ type: 'CREATE_FEEDBACK', payload: feedback, sent: true })
    }).catch((err) => {
      dispatch({ type: 'CREATE_FEEDBACK_ERROR', err, sent: false})
    })
  }
}