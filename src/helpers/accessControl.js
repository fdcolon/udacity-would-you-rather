import React, { Component } from "react"
import { connect } from "react-redux"

import { VALID_USER } from '../redux/actions/authedUser'
import Login from '../components/Login'
import PageNotFound from '../components/PageNotFound'

export const accessControl = WrappedComponent => {
  const SecuredControl = class extends Component {
    render() {
      const { authedUser, questions, match } = this.props
      const isAllowed = authedUser && authedUser.status === VALID_USER
      const { question_id } = match?.params || undefined

      if (!isAllowed) {
        return <Login />
      } else if (question_id && !questions[question_id]) {
        return <PageNotFound />
      }

      return <WrappedComponent { ...this.props } />
    }
  }

  const mapStateToProps = ({ authedUser, questions }) => {
    return {
      authedUser,
      questions
    }
  }

  return connect(
    mapStateToProps
  )(SecuredControl)
}