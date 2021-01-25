import {
  GET_QUESTIONS,
  SAVE_QUESTION,
  SAVE_ANSWER
} from '../actions/questions'

export default function questions (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question
      }
    case SAVE_ANSWER:
      return {
        ...state,
        [action.question.qid]: {
          ...state[action.question.qid],
          optionOne: {
            ...state[action.question.qid].optionOne,
            votes: action.question.answer === 'optionOne'
              ? state[action.question.qid].optionOne.votes.concat([action.question.authedUser])
              : [...state[action.question.qid].optionOne.votes]
          },
          optionTwo: {
            ...state[action.question.qid].optionTwo,
            votes: action.question.answer === 'optionTwo'
              ? state[action.question.qid].optionTwo.votes.concat([action.question.authedUser])
              : [...state[action.question.qid].optionTwo.votes]
          }
        }
      }
    default:
      return state
  }
}