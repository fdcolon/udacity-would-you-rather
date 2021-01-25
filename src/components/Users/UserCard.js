import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

import { accessControl } from '../../helpers/accessControl'
import UserForm from './UserForm'
import { handleAddUser } from '../../redux/actions/users'

class UserCard extends Component {
  onAddUser ({ id, name, avatarURL }) {
    const { handleAddUser } = this.props

    handleAddUser({ id, name, avatarURL: `${avatarURL.value}` })
  }

  render() {
    const { users } = this.props

    return (
      <Card className="new-user">
        <Card.Header>
          <h2>Create User</h2>
        </Card.Header>
        <Card.Body>
          <UserForm
            users={ users }
            onSubmit={ formValues => this.onAddUser(formValues) }
          />
        </Card.Body>
      </Card>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

const dispatchStateToProps = {
  handleAddUser
}

export default accessControl(
  connect(
    mapStateToProps,
    dispatchStateToProps
  )(UserCard)
)