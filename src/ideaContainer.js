import React from 'react'
import './ideaContainer.css'
import Card from './Card.js'

const IdeaContainer = ({ideaList, deleteIdea}) => {
  return(
    <section className="ideas">
      {ideaList.map(idea => {
        return <Card
          id={idea.id}
          title={idea.title}
          description={idea.description}
          key={idea.id}
          deleteIdea={deleteIdea}
        />
      })}
    </section>
  )
}

export default IdeaContainer