import {
  RECEIVE_USERS,
  SET_USER_ANSWER,
  SET_USER_QUESTION,
  ADD_USER
} from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case SET_USER_ANSWER:
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
    case SET_USER_QUESTION:
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    case ADD_USER:
      return {
        ...state,
        [action.user.id]: {
          ...action.user,
          answers: {},
          questions: []
        }
      }
    default:
      return state
  }
}