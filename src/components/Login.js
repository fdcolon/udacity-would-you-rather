import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

import { VALID_USER } from '../redux/actions/authedUser'
import { handleSignInUser } from '../redux/actions/shared'
import UserSelector from './UserSelector'

class Login extends Component {
  componentDidUpdate () {
    const { authedUser } = this.props
  
    if (authedUser && authedUser.status === VALID_USER) {
      this.props.history.push('/home')
    }
  }

  loginUser (userId) {
    if (!!userId) {
      const { users, handleSignInUser } = this.props
      
      handleSignInUser(userId, users)
    }
  }
  
  render() {
    const { users } = this.props

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
          <UserSelector
            users={ users }
            onSubmit={ formValues => this.loginUser(formValues.userId.value) }
          />
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