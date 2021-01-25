import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { ReduxFormInput } from '../form-fields'

class NewQuestionForm extends Component {
  render() {
    const { invalid, hasBeenSubmitted } = this.props

    return (
      <Form
        noValidate
        className="form-section"
        onSubmit={ this.props.handleSubmit }
      >
        <Field
          name="optionOne"
          component={ ReduxFormInput }
          placeholder="Enter Option One Text Here"
          autoFocus={ true }
        />
        <Field
          name="optionTwo"
          component={ ReduxFormInput }
          placeholder="Enter Option Two Text Here"
        />
        <Button
          type="submit"
          className="submit-btn"
          disabled={ invalid || hasBeenSubmitted }
        >
          Submit
        </Button>
      </Form>
    )
  }
}

const validate = formValues => {
  const errors = {}
  const invalidOptions = [
    'neither',
    'both'
  ]

  if (!formValues.optionOne) {
    errors.optionOne = 'You must provide an option!'
  } else if (invalidOptions.includes(formValues.optionOne.toLowerCase())) {
    errors.optionOne = `You cannot set "${formValues.optionOne}" as an option!`
  }

  if (!formValues.optionTwo) {
    errors.optionTwo = 'You must provide an option!'
  } else if (invalidOptions.includes(formValues.optionTwo.toLowerCase())) {
    errors.optionTwo = `You cannot set "${formValues.optionTwo}" as an option!`
  } else if (formValues.optionOne === formValues.optionTwo) {
    errors.optionTwo = `You cannot set the same value as Option One!`
  }

  return errors
}

export default reduxForm({
  form: 'newQuestionForm',
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(NewQuestionForm)