import React, { Component } from 'react'
import { connect } from 'react-redux'

import { accessControl } from '../helpers/accessControl'

class NewQuestion extends Component {
  render() {
    return (
      <div>
        New Question
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser, users, questions }) => {
  return {
    authedUser,
    users,
    questions
  }
}

export default accessControl(
  connect(
    mapStateToProps
  )(NewQuestion)
)