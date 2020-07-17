import React, { Component } from 'react'

import { Task } from '../Task/Task'

import './List.css'

class List extends Component {
  render() {
    const { tasks, deleteTask, completeTask } = this.props

    return (
      <div className='list'>
        {tasks.map(task => 
          <Task
            key={task.id}
            id={task.id}
            content={task.content}
            isCompleted={task.isCompleted}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        )}
      </div>
    )
  }
}

export { List }