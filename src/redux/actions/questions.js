import { saveQuestion, saveQuestionAnswer } from '../../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setUserAnswer } from './users'
import { addAnswerToUser } from './authedUser'

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

function addQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveQuestion (question) {
  return dispatch => {
    dispatch(showLoading())

    return saveQuestion(question)
      .then(newQuestion => dispatch(addQuestion(newQuestion)))
      .then(() => dispatch(hideLoading()))
  }
}

function addAnswer (question) {
  console.log(question)
  return {
    type: SAVE_ANSWER,
    question
  }
}

export function handleSaveAnswer (questionData) {
  console.log(questionData)
  return dispatch => {
    dispatch(showLoading())

    return saveQuestionAnswer(questionData)
      .then(() => dispatch(setUserAnswer(questionData)))
      .then(() => dispatch(addAnswerToUser(questionData)))
      .then(() => dispatch(addAnswer(questionData)))
      .then(() => dispatch(hideLoading()))
  }
}