import React, { Component } from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { setLogoutUser, VALID_USER } from '../redux/actions/authedUser'

class Nav extends Component {
  onLogoutUser () {
    const { setLogoutUser } = this.props
    setLogoutUser()
  }

  render () {
    const { authedUser } = this.props
    return (
      <nav>
        <div className="nav-container">
          <ul className="nav-section">
            <li>
              <NavLink
                to="/home"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add"
                activeClassName="active"
              >
                New Question
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/leaderboard"
                activeClassName="active"
              >
                Leader Board
              </NavLink>
            </li>
          </ul>
          { authedUser && authedUser.status === VALID_USER && (
            <div className="user-section">
              <p>Hello, { authedUser.name }</p>
              <img
                src={ `${process.env.PUBLIC_URL}${authedUser.avatarURL}` }
                alt="user-avatar"
                className="avatar"
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

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(Nav)