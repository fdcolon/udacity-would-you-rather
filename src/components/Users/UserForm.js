import React, { Component, Fragment } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form'

import { ReduxFormInput, ReduxFormSelect } from '../form-fields'
import Avatar from '../Avatar'

class UserForm extends Component {
  state = {
    selectedAvatar: undefined,
    showMessage: false
  }

  componentDidUpdate (prevProps) {
    if (Object.keys(prevProps.users).length < Object.keys(this.props.users).length) {
      this.setState(() => ({
        showMessage: true
      }))

      this.timer = setTimeout(
        () => this.hideMessage(),
        3000
      )
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  hideMessage () {
    this.setState(() => ({
      showMessage: false
    }))
  }

  setOptions (users = {}) {
    const usersArray = Object.entries(users).map(data => data[1])
    const avatarOptions = Array.from({ length: 6 }, (key, index) => `/user-${index + 1}.jpg`)
    const options = []

    avatarOptions.forEach(avatarURL => {
      if (!usersArray.find(user => user.avatarURL === avatarURL)) {
        options.push({
          label: <div className="option"><Avatar url={ avatarURL } showSmall={ true } /></div>,
          value: avatarURL
        })
      }
    })

    return options
  }

  onSelectAvatar (avatarURL) {
    this.setState(() => ({
      selectedAvatar: avatarURL
    }))
  }

  onSubmitUser (formValues) {
    const { onSubmit, reset } = this.props
    onSubmit(formValues)
    reset()
  }

  render() {
    const { invalid, users, handleSubmit } = this.props
    const { selectedAvatar, showMessage } = this.state

    return (
      <Fragment>
        { showMessage && (
          <div className="alert alert-success" role="alert">
            The user has been created successfully!
          </div>
        ) }
        <Form
          noValidate
          className="form-section"
          onSubmit={ handleSubmit(this.onSubmitUser.bind(this)) }
        >
          <Field
            name="id"
            component={ ReduxFormInput }
            placeholder="Enter User ID"
            autoFocus={ true }
          />
          <Field
            name="name"
            component={ ReduxFormInput }
            placeholder="Enter User Name"
          />
          <Field
            name="avatarURL"
            placeholder="Select Avatar"
            component={ ReduxFormSelect }
            options={ this.setOptions(users) }
            onChange={ (event) => this.onSelectAvatar(event?.value) }
            className="users-list"
            isClearable={ true }
          />
          <Button
            type="submit"
            className="submit-btn"
            disabled={ invalid || !selectedAvatar }
          >
            Submit
          </Button>
        </Form>
      </Fragment>
    )
  }
}

const validate = (formValues, { users }) => {
  const errors = {}
  const usersArray = Object.entries(users).map(data => data[1])

  if (!formValues.id) {
    errors.id = 'You must provide a User ID!'
  } else if (!!users[formValues.id]) {
    errors.id = 'This User ID already exists! Please, enter another one!'
  }

  if (!formValues.name) {
    errors.name = 'You must provide a User Name!'
  } else if (!!usersArray.find(user => user.name === formValues.name)) {
    errors.name = `This User Name already exists! Please, enter another one!`
  }

  if (!formValues.avatarURL) {
    errors.avatarURL = 'You must select an Avatar!'
  }

  return errors
}

export default reduxForm({
  form: 'userForm',
  validate,
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(UserForm)
