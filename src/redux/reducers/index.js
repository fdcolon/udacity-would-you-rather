import { combineReducers } from 'redux'
import { loadingBarReducer as loadingBar } from 'react-redux-loading'
import { reducer as formReducer } from 'redux-form'

import authedUser from './authedUser'
import users from './users'
import questions from './questions'

export default combineReducers({
  authedUser,
  users,
  questions,
  loadingBar,
  form: formReducer
})