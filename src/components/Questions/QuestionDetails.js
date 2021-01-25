import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

import { accessControl } from '../../helpers/accessControl'
import { formatQuestion } from '../../helpers'
import { handleSaveAnswer } from '../../redux/actions/questions'
import QuestionUnanswered from './QuestionUnanswered'
import QuestionAnswered from './QuestionAnswered'
import Avatar from '../Avatar'

class QuestionDetails extends Component {
  state = {
    question: null,
    vote: null
  }

  componentDidMount () {
    this.setFormatToQuestion()  
  }

  componentDidUpdate (prevProps) {
    const { question_id } = this.props.match.params
    const prevVotesOptOne = prevProps.questions[question_id].optionOne.votes.length
    const prevVotesOptTwo = prevProps.questions[question_id].optionTwo.votes.length
    const votesOptOne = this.props.questions[question_id].optionOne.votes.length
    const votesOptTwo = this.props.questions[question_id].optionTwo.votes.length

    if (prevVotesOptOne !== votesOptOne || prevVotesOptTwo !== votesOptTwo) {
      this.setFormatToQuestion()
    }
  }

  setFormatToQuestion () {
    const { question_id } = this.props.match.params
    const { questions, users, authedUser } = this.props
    const question = questions[question_id]
      ? formatQuestion(questions[question_id], users, authedUser)
      : null
    const vote = authedUser.answers[question_id] || 'optionOne'

    this.setState(() => ({
      question,
      vote
    }))
  }

  onSelectOption (option) {
    this.setState(() => ({
      vote: option
    }))
  }

  handleVote (e) {
    const { question_id } = this.props.match.params
    const { handleSaveAnswer } = this.props
    const { vote } = this.state

    e.preventDefault()
    handleSaveAnswer({
      qid: question_id,
      answer: vote
    })
  }

  render() {
    const { question, vote } = this.state

    if (!question) {
      return null
    }

    const { authorAvatar, title, options, isAnswered, totalVotes } = question

    return (
      <Card className="question-card">
        <Card.Header>
          <h2>{ title }</h2>
        </Card.Header>
        <Card.Body>
          <div className="avatar-section">
            <Avatar
              url={ authorAvatar }
              showBig={ true }
            />
          </div>
          <div className="question-section">
            { !isAnswered && (
              <QuestionUnanswered
                options={ options }
                vote={ vote }
                onOptionChange={ (option) => this.onSelectOption(option) }
                onSetVote={ (e) => this.handleVote(e) }
              />
            ) }
            { isAnswered && (
              <QuestionAnswered
                options={ options }
                vote={ vote }
                totalVotes={ totalVotes }
              />
            ) }
          </div>
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = ({ authedUser, questions, users }) => {
  return {
    authedUser,
    questions,
    users
  }
}

const dispatchStateToProps = {
  handleSaveAnswer
}

export default accessControl(
  connect(
    mapStateToProps,
    dispatchStateToProps
  )(QuestionDetails)
)