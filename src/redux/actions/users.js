export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SET_USER_ANSWER = 'SET_USER_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function setUserAnswer (question) {
  return {
    type: SET_USER_ANSWER,
    question
  }
}