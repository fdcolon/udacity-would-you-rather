import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (question, users) {
  return _saveQuestion(question, users)
}

export function saveQuestionAnswer (question, users) {
  return _saveQuestionAnswer(question, users)
}