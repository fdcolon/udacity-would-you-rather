import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

import Avatar from './Avatar'

function QuestionCard(props) {
  const { question, author } = props
  return (
    <Card className="question-card">
      <Card.Header>
        <h2>{ `${author.name} asks:` }</h2>
      </Card.Header>
      <Card.Body>
        <div className="avatar-section">
          <Avatar url={ author.avatarURL } />
        </div>
        <div className="question-section">
          <h4>Would you rather</h4>
          <p>... { question.optionOne.text } ...</p>
          <NavLink
            to={ `/questions/${question.id}` }
            className="poll-btn"
          >
            View Poll
          </NavLink>
        </div>
      </Card.Body>
    </Card>
  );
}

export default QuestionCard;