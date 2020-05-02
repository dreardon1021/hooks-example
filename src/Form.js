import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {
  const [state, setState] = useState({
    title: '',
    description: ''
  })

  const updateFormState = (event) => {
    if (event.target.name === 'title') {
      setState({title: event.target.value, description: state.description})
    } else if (event.target.name === 'description') {
      setState({title: state.title, description: event.target.value})
    }
  }

  const submitForm = (event) => {
    event.preventDefault()
    let newIdea = {
      id: Date.now(),
      title: state.title,
      description: state.description
    }
    props.addIdea(newIdea)
  }


  return(
    <form>
      <input onChange={updateFormState} name="title" placeholder="Title"/>
      <input onChange={updateFormState} name="description" placeholder="Description"/>
      <button onClick={submitForm}>Submit</button>
    </form>
  )
}

export default Form