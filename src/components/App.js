import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { isEmpty } from 'lodash'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { handleGetValidUsers } from '../redux/actions/shared'

import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import QuestionDetails from './QuestionDetails'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import { VALID_USER } from '../redux/actions/authedUser'

class App extends Component {
  componentDidMount() {
    const { users, handleGetValidUsers } = this.props

    if (isEmpty(users)) {
      handleGetValidUsers()
    }
  }

  render() {
    const { loading, authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            <Nav />
            { loading
                ? null
                : (
                  <div className="content">
                    <Switch>
                      <Route
                        path="/"
                        exact
                        component={ Login }
                      />
                      <Route
                        path="/home"
                        component={ Home }
                      />
                      <Route
                        path="/add"
                        component={ NewQuestion }
                      />
                      <Route
                        path="/questions/:question_id"
                        component={ QuestionDetails }
                      />
                      <Route
                        path="/leaderboard"
                        component={ LeaderBoard }
                      />
                      <Route render={() => <Redirect to={
                        authedUser?.status === VALID_USER
                          ? '/home'
                          : '/'
                      } />} />
                    </Switch>
                  </div>
                )
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser, users }) => {
  return {
    loading: isEmpty(users),
    authedUser,
    users
  }
}

const dispatchToProps = {
  handleGetValidUsers
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(App)