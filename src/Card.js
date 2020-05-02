import React from 'react'
import './Card.css'

const Card = ({id, title, description, deleteIdea}) => {
  return (
    <article id={id}>
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </article>
  )
}

export default Card