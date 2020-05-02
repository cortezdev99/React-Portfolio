import authReducer from './authReducer'
import projectReducer from './projectReducer'
import feedbackReducer from './feedbackReducer'
import darkmodeReducer from './darkmodeReducer'

import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  feedback: feedbackReducer,
  darkmode: darkmodeReducer
})

export default rootReducer