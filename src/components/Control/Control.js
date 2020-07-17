import React, { Component } from 'react'

import './Control.css'

class Control extends Component {
  state = {
    inputValue: ''
  }

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleClick()
    }
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value })
  }

  handleClick = () => {
    const { addTask } = this.props
    if (this.state.inputValue !== '') { 
      addTask(this.state.inputValue)
    }
    this.setState({ inputValue: '' }) 
  }

  render() {
    const { inputValue } = this.state

    return (
      <div className='control'>
        <input
          placeholder='Введи задачу'
          className='field'
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={inputValue}
        />
        <button
          className='add'
          type='button'
          onClick={this.handleClick}
        >
          +
        </button>
      </div>
    )
  }
}

export { Control }
