import React from 'react'
import { Card } from 'react-bootstrap'
import { FaTrophy } from "react-icons/fa"

import LeaderScoreTopic from './LeaderScoreTopic'
import LeaderScoreCard from './LeaderScoreCard'

function LeaderCard(props) {
  const { leader, place } = props
  let placeClass = ''
  
  switch (place) {
    case 1:
      placeClass = 'first'
      break
    case 2:
      placeClass = 'second'
      break
    default:
      placeClass = 'third'
      break
  }

  return (
    <Card className="leader-card">
      <Card.Body>
        <div className="avatar-section">
          <img
            src={ `${process.env.PUBLIC_URL}${leader.avatarURL}` }
            alt="user-avatar"
            className='avatar'
            />
        </div>
        <div className="leader-section">
          <h2>{ leader.name }</h2>
          { leader.topics.map(topic => (
            <LeaderScoreTopic
              key={ topic.id }
              topic={ topic }
            />
          )) }
        </div>
        <div className="score-section">
          <LeaderScoreCard score={ leader.totalScore } />
        </div>
        <div className={ `trophy ${placeClass}` }>
          <FaTrophy className="icon" />
        </div>
      </Card.Body>
    </Card>
  )
}

export default LeaderCard