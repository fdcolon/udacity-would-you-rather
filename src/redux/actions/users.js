export const RECEIVE_USERS = 'RECEIVE_USERS'
export const GET_USER = 'GET_USER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function findUser (id) {
  return {
    type: GET_USER,
    id
  }
}