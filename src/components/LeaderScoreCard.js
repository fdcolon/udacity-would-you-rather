import React from 'react'
import { Card } from 'react-bootstrap'

function LeaderScoreCard(props) {
  const { score } = props
  return (
    <Card className="score-card">
      <Card.Header>
        <h4>Score</h4>
      </Card.Header>
      <Card.Body>
        <div className="score-value">
          { score }
        </div>
      </Card.Body>
    </Card>
  )
}

export default LeaderScoreCard;