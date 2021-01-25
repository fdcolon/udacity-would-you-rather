import React, { Component } from "react"
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom'

import { VALID_USER } from '../redux/actions/authedUser'

export const accessControl = WrappedComponent => {
  const SecuredControl = class extends Component {
    render() {
      const { authedUser, questions, match } = this.props
      const isAllowed = authedUser && authedUser.status === VALID_USER
      const { question_id } = match?.params || undefined

      if (!isAllowed && (!question_id || !!questions[question_id])) {
        return <Redirect to="/"/>
      } else if (!isAllowed && question_id && !questions[question_id]) {
        return <Redirect to="/404"/>
      }

      return <WrappedComponent { ...this.props } />
    }
  }

  const mapStateToProps = ({ authedUser, questions, loadingBar }) => {
    return {
      authedUser,
      questions
    }
  }

  return connect(
    mapStateToProps
  )(SecuredControl)
}