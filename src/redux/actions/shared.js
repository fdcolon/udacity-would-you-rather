import { showLoading, hideLoading } from 'react-redux-loading'

import { getInitialData } from '../../utils/api'
import { setAuthedUser, setInvalidUser } from './authedUser'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

/**
 * Gets the initial values (users & questions).
 */
export function handleGetInitialData () {
  return dispatch => {
    dispatch(showLoading())

    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(questions))
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      })
  }
}

/**
 * Tries to login a user. If invalid, dispatches an error. Otherwise, gets the initial data.
 * @param {Object} user // Contains the authed user info (if any selected).
 * @param {Array} users // Contains the list of existing valid users.
 */
export function handleSignInUser (userId, users) {
  const validUser = Object.keys(users).find(user => user === userId)

  if (!validUser) {
    return dispatch => {
      dispatch(setInvalidUser(userId))
    }
  }
  
  return dispatch => {
    dispatch(showLoading())
    dispatch(setAuthedUser(users[validUser]))
    dispatch(hideLoading())
  }
}
