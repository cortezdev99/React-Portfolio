const initState = {
  feedback: [],
  err: null,
  sent: false
}

const feedbackReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_FEEDBACK':
      return {
        ...state,
        sent: action.sent,
        err: null
      }
    case 'CREATE_FEEDBACK_ERROR':
      return {
        ...state,
        sent: false,
        err: action.err
      }
    default:
      return {
        ...state
      }
  }
}

export default feedbackReducer