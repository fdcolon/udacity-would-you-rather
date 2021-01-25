import {
  SET_AUTHED_USER,
  SET_INVALID_USER,
  SET_LOGOUT_USER,
  ADD_ANSWER,
  ADD_QUESTION
} from '../actions/authedUser'

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
    case ADD_ANSWER:
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.question.qid]: action.question.answer
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        questions: state.questions.concat([action.question.id])
      }
    default:
      return state
  }
}