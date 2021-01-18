import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

import { VALID_USER } from '../redux/actions/authedUser'

export const accessControl = WrappedComponent => {
  const SecuredControl = class extends Component {
    render() {
      const { authedUser } = this.props
      const isAllowed = authedUser && authedUser.status === VALID_USER

      if (!isAllowed) {
        return <Redirect to="/"/>
      }

      return <WrappedComponent { ...this.props } />
    }
  }

  const mapStateToProps = ({ authedUser }) => {
    return {
      authedUser
    }
  }

  return connect(
    mapStateToProps
  )(SecuredControl)
}