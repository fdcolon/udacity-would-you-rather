import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { accessControl } from '../helpers/accessControl'
import LeaderCard from './LeaderCard'
import { getLeadersBoard } from '../helpers'

class LeaderBoard extends Component {
  state = {
    leaders: []
  }

  componentDidMount () {
    this.setState(() => ({
      leaders: getLeadersBoard(this.props.users)
    }))
  }

  render() {
    const { leaders } = this.state

    return (
      <Fragment>
        { leaders.map((leader, index) => (
          <LeaderCard
            key={ leader.id }
            leader={ leader }
            place={ index + 1 }
          />
        )) }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users
  }
}

export default accessControl(
  connect(
    mapStateToProps
  )(LeaderBoard)
)