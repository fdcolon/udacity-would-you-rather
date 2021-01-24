import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap'
import { capitalize } from 'lodash'

import { accessControl } from '../helpers/accessControl'
import { groupQuestions } from '../helpers'

import QuestionCard from './QuestionCard'

class Home extends Component {
  state = {
    key: 'unanswered',
    groupedQuestions: {}
  }

  componentDidMount () {
    const { questions, authedUser } = this.props
    
    this.setState(() => ({
      groupedQuestions: groupQuestions(questions, authedUser)
    }))
  }

  onChangeTab (key) {
    this.setState(() => ({
      key
    }))
  }

  render() {
    const { key, groupedQuestions } = this.state
    const { users } = this.props

    if (!groupedQuestions) {
      return null
    }

    return (
      <Tabs
        transition={ false }
        activeKey={ key }
        onSelect={ (tab) => this.onChangeTab(tab)  }
      >
        { Object.keys(groupedQuestions).map(questionType => (
          <Tab
            key={ questionType }
            eventKey={ questionType }
            title={ `${capitalize(questionType)} Questions` }
          >
            { groupedQuestions[questionType].map(question => (
              <QuestionCard
                key={ question.id }
                question={ question }
                author={ users[question.author] }
              />
            )) }
          </Tab>
        )) }
      </Tabs>
    )
  }
}

const mapStateToProps = ({ users, authedUser, questions, loadingBar }) => {
  return {    
    users,
    authedUser,
    questions
  }
}

const dispatchStateToProps = {
}

export default accessControl(
  connect(
    mapStateToProps,
    dispatchStateToProps
  )(Home)
  )