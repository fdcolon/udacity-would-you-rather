import { RECEIVE_USERS, SET_USER_ANSWER } from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case SET_USER_ANSWER:
      console.log('SET_USER_ANSWER')
      console.log(action)
      return {
        ...state,
        [action.question.authedUser]: {
          ...state[action.question.authedUser],
          answers: {
            ...state[action.question.authedUser].answers,
            [action.question.qid]: action.question.answer
          }
        }
      }
    default:
      return state
  }
}