import React from 'react';
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function QuestionCard(props) {
  const { question, author } = props
  return (
    <Card className="question-card">
      <Card.Header>
        <h2>{ `${author.name} asks:` }</h2>
      </Card.Header>
      <Card.Body>
        <div className="avatar-section">
          <img
            src={ `${process.env.PUBLIC_URL}${author.avatarURL}` }
            alt="user-avatar"
            className="avatar"
          />
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