import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

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
        <Button
          variant='outline-light'
          onClick={this.handleClick}
          size='sm'
        >
        ×
        </Button>
      </div>
    )
  }
}

export { Task }
