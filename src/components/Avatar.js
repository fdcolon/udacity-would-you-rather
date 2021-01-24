import React, { Fragment } from 'react'

function Avatar(props) {
  const { url, showBig } = props

  return (
    <Fragment>
      <img
        src={ `${process.env.PUBLIC_URL}${url}` }
        alt="user-avatar"
        className={ `avatar ${showBig ? 'big' : ''}` }
      />
    </Fragment>
  )
}

export default Avatar