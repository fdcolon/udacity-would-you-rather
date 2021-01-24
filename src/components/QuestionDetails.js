import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Button, ProgressBar } from 'react-bootstrap'

import { accessControl } from '../helpers/accessControl'
import { formatQuestion } from '../helpers'
import { handleSaveAnswer } from '../redux/actions/questions'

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
    const { handleSaveAnswer, authedUser } = this.props
    const { vote } = this.state

    e.preventDefault()
    handleSaveAnswer({
      authedUser: authedUser.id,
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
          <img
            src={ `${process.env.PUBLIC_URL}${authorAvatar}` }
            alt="user-avatar"
            className={ `avatar ${isAnswered ? 'big' : ''}` }
          />
        </div>
        <div className="question-section">
          { !isAnswered && (
            <Fragment>
              <h4>Would you rather</h4>
              <Form noValidate onSubmit={ (e) => this.handleVote(e) }>
                { Object.keys(options).map(questionType => (
                  <Form.Check 
                    key={ questionType }
                    type="radio"
                    name="vote"
                    value={ questionType }
                    checked={ vote === questionType }
                    label={ options[questionType].label }
                    onChange={ (e) => this.onSelectOption(e.currentTarget.value) }
                  />  
                )) }
                <Button type="submit">
                  Submit
                </Button>
              </Form>
            </Fragment>
          ) }
          { isAnswered && (
            <Fragment>
              <h3>Results:</h3>
              { Object.keys(options).map(questionType => (
                <div
                  key={ questionType }
                  className={ `option-block ${vote === questionType ? 'selected' : ''}` }
                >
                  <p className="question">
                    { `Would you rather ${options[questionType].label}?` }
                  </p>
                  <ProgressBar
                    className="statistic-bar"
                    now={ options[questionType].percentage }
                    label={ options[questionType].percentage > 0
                      ? `${options[questionType].percentage}%`
                      : ''
                    }
                  />
                  <p className="statistic-data">
                    { `${options[questionType].votes} out of ${totalVotes} votes` }
                  </p>
                  <div className="your-vote">
                    Your Vote
                  </div>
                </div>
              )) }
            </Fragment>
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