import React, { Component } from 'react'

import './Task.css'

class Task extends Component {

  handleChange = () => {
    const { completeTask, id } = this.props

    completeTask(id)
  }

  handleClick = () => {
    const { deleteTask, id } = this.props

    deleteTask(id)
  }

  render() {
    const { id, content, isCompleted } = this.props

    return (
      <div className='task'>
        <span className={isCompleted ? 'success' : ''} >{content}</span>
        <input type='checkbox' onChange={this.handleChange} checked={isCompleted} />
        <button
          type='button'
          onClick={this.handleClick}
        >
        x
        </button>
      </div>
    )
  }
}

export { Task }
