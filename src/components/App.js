import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { isEmpty } from 'lodash'
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom'

import { handleGetInitialData } from '../redux/actions/shared'

import Nav from './Nav'
import Login from './Login'
import Home from './Home'
import QuestionDetails from './Questions/QuestionDetails'
import NewQuestion from './Questions/NewQuestion'
import LeaderBoard from './LeaderBoard/LeaderBoard'
import PageNotFound from './PageNotFound'
import UserCard from './Users/UserCard'
import { VALID_USER } from '../redux/actions/authedUser'

class App extends Component {
  componentDidMount() {
    const { users, handleGetInitialData } = this.props

    if (isEmpty(users)) {
      handleGetInitialData()
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
                        path="/user"
                        component={ UserCard }
                      />
                      <Route
                        path="/add"
                        component={ NewQuestion }
                      />
                      <Route
                        path="/questions/:question_id"
                        exact
                        component={ QuestionDetails }
                      />
                      <Route
                        path="/leaderboard"
                        component={ LeaderBoard }
                      />
                      <Route
                        path="/404"
                        component={ PageNotFound }
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
  handleGetInitialData
}

export default connect(
  mapStateToProps,
  dispatchToProps
)(App)