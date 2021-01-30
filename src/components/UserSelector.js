import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { VALID_USER } from '../redux/actions/authedUser'
import { ReduxFormSelect } from './form-fields'
import Avatar from './Avatar'

class UserSelector extends Component {
  state = {
    selectedUser: ''
  }

  setOptions (users = {}) {
    const options = Object.keys(users).map(userId => {
      const user = users[userId]

      return {
        label: <div className="option"><Avatar url={ user.avatarURL } showSmall={ true } /> { user.name }</div>,
        value: userId
      }
    })

    options.unshift({
      label: <div className="option"><Avatar url="/ghost.png" showSmall={ true } /> Ghost User</div>,
      value: 'ghost'
    })

    return options
  }

  onSelectUser (userId) {
    this.setState(() => ({
      selectedUser: userId || ''
    }))
  }

  render() {
    const { users, authedUser } = this.props
    const { selectedUser } = this.state

    return (
      <Form
        noValidate
        className="form-section"
        onSubmit={ this.props.handleSubmit }
      >
        <Field
          name="userId"
          placeholder="Select User"
          component={ ReduxFormSelect }
          options={ this.setOptions(users) }
          onChange={ (event) => this.onSelectUser(event?.value) }
          className="users-list"
          maxMenuHeight='11rem'
          isClearable={ true }
        />

        { authedUser && authedUser.status !== VALID_USER && (
          <div className="alert alert-danger" role="alert">
            We're sorry, but that is an invalid user!
          </div>
        ) }

        <Button
          type="submit"
          variant="info"
          className="sign-in-btn"
          disabled={ !selectedUser }
        >
          Submit
        </Button>
      </Form>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if (formValues.userId === '') {
    errors.userId = true
  }

  return errors
}

export default reduxForm({
  form: 'newQuestionForm',
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(UserSelector)