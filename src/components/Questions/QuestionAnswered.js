import React, { Fragment } from 'react'
import { ProgressBar } from 'react-bootstrap'

function QuestionAnswered(props) {
  const { options, vote, totalVotes } = props

  return (
    <Fragment>
      <h3>Results:</h3>
      { Object.keys(options).map(questionType => (
        <div
          key={ questionType }
          className={ `option-block ${vote === questionType ? 'selected' : ''}` }
        >
          <p className="question">
            { `Would you rather ${options[questionType].label}?` }
          </p>
          <ProgressBar
            className="statistic-bar"
            now={ options[questionType].percentage }
            label={ options[questionType].percentage > 0
              ? `${options[questionType].percentage}%`
              : ''
            }
          />
          <p className="statistic-data">
            { `${options[questionType].votes} out of ${totalVotes} votes` }
          </p>
          <div className="your-vote">
            Your Vote
          </div>
        </div>
      )) }
    </Fragment>
  )
}

export default QuestionAnswered