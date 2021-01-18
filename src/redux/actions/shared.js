import { showLoading, hideLoading } from 'react-redux-loading'

import { getUsers, getQuestions } from '../../utils/api'
import { setAuthedUser, setInvalidUser } from './authedUser'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

/**
 * Gets the users list for Login purposes.
 */
export function handleGetValidUsers () {
  return dispatch => {
    dispatch(showLoading())

    return getUsers()
      .then(users => {
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

    return getQuestions()
      .then(questions => {
        dispatch(receiveQuestions(questions, users[validUser]))
        dispatch(setAuthedUser(users[validUser]))
        dispatch(hideLoading())
      })
  }
}

/**
 * Gets the 
 * @param {String} userId // Contains the User ID of the valid logged user.
 */
export function handleGetQuestions (user) {
  return dispatch => {
    dispatch(showLoading())

    return getQuestions()
      .then(questions => {
        dispatch(receiveQuestions(questions, user))
        dispatch(hideLoading())
      })
  }
}