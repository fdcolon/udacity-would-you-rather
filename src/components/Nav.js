import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

import { setLogoutUser, VALID_USER } from '../redux/actions/authedUser'
import Avatar from './Avatar'

class Nav extends Component {
  onLogoutUser () {
    const { setLogoutUser } = this.props
    setLogoutUser()
    this.props.history.push('/')
  }

  render () {
    const { authedUser } = this.props
    const activeClassName = authedUser?.status === VALID_USER
      ? 'active'
      : ''
    return (
      <nav>
        <div className="nav-container">
          <ul className="nav-section">
            <li>
              <NavLink
                to="/home"
                activeClassName={ activeClassName }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/user"
                activeClassName={ activeClassName }
              >
                New User
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                activeClassName={ activeClassName }
              >
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                activeClassName={ activeClassName }
              >
                Leader Board
              </NavLink>
            </li>
          </ul>
          { authedUser && authedUser.status === VALID_USER && (
            <div className="user-section">
              <p>Hello, { authedUser.name }</p>
              <Avatar
                url={ authedUser.avatarURL }
                showSmall={ true }
              />
              <button
                className="logout-btn"
                onClick={ () => this.onLogoutUser() }>
                Logout
              </button>
            </div>
          ) }
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

const dispatchStateToProps = {
  setLogoutUser
}

export default withRouter(connect(
  mapStateToProps,
  dispatchStateToProps
)(Nav))