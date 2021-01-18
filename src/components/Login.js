import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'

import { handleSignInUser } from '../redux/actions/shared'
import { VALID_USER } from '../redux/actions/authedUser'

class Login extends Component {
  state = {
    selectedUserId: ''
  }

  componentDidUpdate () {
    const { authedUser } = this.props
  
    if (authedUser && authedUser.status === VALID_USER) {
      this.props.history.push('/home')
    }
  }

  onSelectUser (userId) {
    this.setState(() => ({
      selectedUserId: userId
    }))
    this.setState(() => ({
      selectedUserId: userId
    }))
  }

  loginUser (userId) {
    if (!!userId) {
      const { users, handleSignInUser } = this.props
      
      handleSignInUser(userId, users)
    }
  }
  
  render() {
    const { users } = this.props
    const { selectedUserId } = this.state
    const usersKeys = Object.keys(users)
    return (
      <Card className="text-center">
        <Card.Header>
          <h1>Welcome to the Would You Rather App!</h1>
          <p>Please sign in to continue</p>
        </Card.Header>
        <Card.Body>
          <img
            src={ `${process.env.PUBLIC_URL}/react-redux.jpg` }
            alt="logo"
            className="logo"
          />
          <Card.Title >
            Sign In
          </Card.Title>
          <select
            defaultValue=""
            className="users-list"
            onChange={ (event) => this.onSelectUser(event.target.value) }
          >
            <option disabled value="">Select User</option>
            { usersKeys.map(userId => (
              <option
                key={ userId }
                value={ userId }
              >
                { users[userId].name }
              </option>
            )) }
          </select>
          <Button
            block
            variant="info"
            className="sign-in-button"
            disabled={ !selectedUserId }
            onClick={ () => this.loginUser(selectedUserId) }
          >
            Sign In
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users
  }
}

export default connect(
  mapStateToProps,
  { handleSignInUser }
)(Login);