const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: action.err
      }
    case 'LOGIN_SUCCESS':
      console.log('login success')
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_ERROR':
      console.log('Signout Error!', action.err)
      return {
        ...state
      }
    case 'SIGNOUT_SUCCESS':
      console.log('Signout Success!')
      return {
        ...state
      }
    default:
      return state
  }
}

export default authReducer