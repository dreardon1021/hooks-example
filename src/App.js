import React, { useState } from 'react';
import './App.css';
import IdeaContainer from './ideaContainer.js'
import Form from './Form.js'


const App = () =>  {
  const [state, setState] = useState({
    ideas: [
      {id: 1, title: 'stuff', description: 'things'},
      {id: 2, title: 'hello', description: 'world'},
      {id: 3, title: 'fire', description: 'ice'}
    ]
  })

  const addIdea = (newIdea) => {
    const updatedIdeas= state.ideas.concat([newIdea])
    setState({ideas: updatedIdeas})
  }

  const deleteIdea = (id) => {
    let updatedIdeas = state.ideas.filter(idea => idea.id !== id)
    setState({ideas: updatedIdeas})
  }

  return(
    <main>
      <h1>Idea Box 2</h1>
      <section className="content">
        <Form addIdea={addIdea}/>
        <IdeaContainer ideaList={state.ideas} deleteIdea={deleteIdea}/>
      </section>
    </main>
  )
}


export default App;
