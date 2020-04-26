import React, { Component } from 'react'

class CreateProject extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      content: '',
      link: '',
      type: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <div className='create-project__container'>
        <form onSubmit={this.handleSubmit}>
          <div className='create-project__input'>
            <input type='text' id='title' placeholder='Title' onChange={this.handleChange} />
          </div>

          <div className='create-project__input'>
            <input type='text' id='content' placeholder='Content' onChange={this.handleChange} />
          </div>

          <div className='create-project__input'>
            <input type='text' id='link' placeholder='Link' onChange={this.handleChange} />
          </div>

          <div className='create-project__input'>
            <input type='text' id='type' placeholder='Type' onChange={this.handleChange} />
          </div>

          <div className='create-project__button'>
            <button>Create Project</button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject