import React, { Component } from 'react';
import { connect } from 'react-redux'

import { accessControl } from '../helpers/accessControl'

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        Leader Board
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
  )(LeaderBoard)
)