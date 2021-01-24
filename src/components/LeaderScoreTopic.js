import React from 'react'

function LeaderScoreTopic(props) {
  const { label, value } = props.topic
  return (
    <div className="table-row">
      <div className="table-cell topic">
        { label }
      </div>
      <div className="table-cell value">
        { value }
      </div>
    </div>
  )
}

export default LeaderScoreTopic