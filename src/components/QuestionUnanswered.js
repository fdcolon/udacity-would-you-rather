import React, { Fragment } from 'react'
import { Form, Button } from 'react-bootstrap'

const QuestionUnanswered = (props) => {
  const { options, vote, onSetVote, onOptionChange } = props

  return (
    <Fragment>
      <h3>Would You Rather...</h3>
      <Form noValidate onSubmit={ (e) => onSetVote(e) }>
        { Object.keys(options).map(questionType => (
          <Form.Check 
            key={ questionType }
            type="radio"
            name="vote"
            value={ questionType }
            checked={ vote === questionType }
            label={ options[questionType].label }
            onChange={ (e) => onOptionChange(e.currentTarget.value) }
          />  
        )) }
        <Button type="submit" className="vote-btn">
          Submit
        </Button>
      </Form>
    </Fragment>
  )
}

export default QuestionUnanswered