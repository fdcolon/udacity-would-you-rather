import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa"

function PageNotFound(props) {
  const messages = [
    `The wrong path you choose! Going back to Home you must!`,
    `I'm sorry master, but the poll you are looking for doesn't exist! Please go back to Home.`,
    `I told you R2, we shouldn't have accesed to this path. Now we need to go back to Home!`,
    `It's a trap! This path belongs to an unexisting poll. Go back to Home!`
  ]
  const randomIndex = Math.floor(Math.random() * 4)

  return (
    <div className="page-not-found">
      <h2>{ messages[randomIndex] }</h2>
      <img
        src={ `${process.env.PUBLIC_URL}404-${randomIndex}.png` }
        alt="Page Not Found"
        className="random-img"
      />
      <NavLink
        to="/home"
        className="home-btn"
      >
        <FaHome /> Back To Home
      </NavLink>
    </div>
  )
}

export default PageNotFound