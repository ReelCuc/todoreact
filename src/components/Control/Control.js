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

  handleFilterChange = event => {
    this.props.setFilter(event.target.value)
  }


  render() {
    const { inputValue } = this.state
    const { filter } = this.props

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
        <label>
          <input
          value='whole'
          checked={filter === 'whole'}
          onChange={this.handleFilterChange}
          className='filter'
          type='radio'
          />
          All todos
        </label>
        <label>
          <input
          value='complete'
          checked={filter === 'complete'}
          onChange={this.handleFilterChange}
          className='filter'
          type='radio'
          />
          complete todos
        </label>
        <label>
          <input
          value='uncomplete'
          checked={filter === 'uncomplete'}
          onChange={this.handleFilterChange}
          className='filter'
          type='radio'
          />
          uncompleted todos
        </label>
      </div>
    )
  }
}

export { Control }
