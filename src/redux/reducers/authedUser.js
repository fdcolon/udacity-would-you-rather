import {
  SET_AUTHED_USER,
  SET_INVALID_USER,
  SET_LOGOUT_USER
} from '../actions/authedUser'
import { SAVE_ANSWER } from '../actions/questions'

export default function authUser (state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
    case SET_INVALID_USER:
      return {
        ...action.user,
        status: action.status
      }
    case SET_LOGOUT_USER:
      return null
    case SAVE_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.question.qid]: action.question.answer
        }
      }
    default:
      return state
  }
}