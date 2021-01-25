import { saveQuestion, saveQuestionAnswer } from '../../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setUserAnswer, setUserQuestion } from './users'
import { addAnswerToUser, addQuestionToUser } from './authedUser'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function receiveQuestions (questions, user) {
  return {
    type: GET_QUESTIONS,
    questions,
    user
  }
}

export function getQuestions () {

}

function addQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveQuestion (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser.id
    })
      .then(newQuestion => {
        dispatch(setUserQuestion(newQuestion))
        dispatch(addQuestionToUser(newQuestion))
        dispatch(addQuestion(newQuestion))
        dispatch(hideLoading())
      })
  }
}

function addAnswer (question) {
  return {
    type: SAVE_ANSWER,
    question
  }
}

export function handleSaveAnswer (questionData) {
  return dispatch => {
    dispatch(showLoading())

    return saveQuestionAnswer(questionData)
      .then(() => {
        dispatch(setUserAnswer(questionData))
        dispatch(addAnswerToUser(questionData))
        dispatch(addAnswer(questionData))
        dispatch(hideLoading())
      })
  }
}