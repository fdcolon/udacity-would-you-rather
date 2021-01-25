import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

import { accessControl } from '../../helpers/accessControl'
import NewQuestionForm from './NewQuestionForm'
import { handleSaveQuestion } from '../../redux/actions/questions'

class NewQuestion extends Component {
  state = {
    hasBeenSubmitted: false
  }

  onSubmitQuestion (formValues) {
    const { handleSaveQuestion } = this.props
    const { optionOne, optionTwo } = formValues

    handleSaveQuestion(optionOne, optionTwo)
    
    this.setState(() => ({
      hasBeenSubmitted: true
    }))
  }

  render() {
    const { hasBeenSubmitted } = this.state
    const { loading } = this.props

    if (!loading && hasBeenSubmitted) {
      return <Redirect to="/home" />
    }

    return (
      <Card className="new-question-card">
        <Card.Header>
          <h2>Create New Question</h2>
        </Card.Header>
        <Card.Body>
          <div>
            <p>Complete the question:</p>
            <h4>Would you rather...</h4>
            <NewQuestionForm
              hasBeenSubmitted={ hasBeenSubmitted }
              onSubmit={ (formValues) => this.onSubmitQuestion(formValues) }
            />
          </div>
        </Card.Body>
      </Card>
    )
  }
}

const dispatchStateToProps = {
  handleSaveQuestion
}

const mapStateToProps = ({ loadingBar }) => {
  return {
    loading: !!loadingBar.default
  }
}

export default accessControl(
  connect(
    mapStateToProps,
    dispatchStateToProps
  )(NewQuestion)
)