import React, { Fragment } from 'react'

function Avatar(props) {
  const { url, showBig, showSmall } = props
  let additionalClass = ''

  if (showBig) {
    additionalClass = 'big'
  } else if (showSmall) {
    additionalClass = 'small'
  }

  return (
    <Fragment>
      <img
        src={ `${process.env.PUBLIC_URL}${url}` }
        alt="user-avatar"
        className={ `avatar ${additionalClass}`.trim() }
      />
    </Fragment>
  )
}

export default Avatar