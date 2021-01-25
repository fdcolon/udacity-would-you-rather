export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const SET_INVALID_USER = 'SET_INVALID_USER'
export const SET_LOGOUT_USER = 'LOGOUT_USER'
export const VALID_USER = 'VALID_USER'
export const INVALID_USER = 'INVALID_USER'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

export function setAuthedUser (user) {
  return {
    type: SET_AUTHED_USER,
    user,
    status: VALID_USER
  }
}

export function setLogoutUser () {
  return {
    type: SET_LOGOUT_USER
  }
}

export function setInvalidUser () {
  return {
    type: SET_INVALID_USER,
    status: INVALID_USER
  }
}

export function addAnswerToUser (question) {
  return {
    type: ADD_ANSWER,
    question
  }
}

export function addQuestionToUser (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}