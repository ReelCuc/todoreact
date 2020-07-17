import React, { Component } from 'react'

import { Control } from '../../components/Control/Control'
import { List } from '../../components/List/List'

import './App.css'

class App extends Component {
  state = {
    tasks: [{ id: 1, content: 'zh', isCompleted: false }]
  }

  addTask = text => {
    const { tasks } = this.state

    const newTask = { id: +new Date(), content: text, isCompleted: false }
    const updatedTasks = [...tasks, newTask]

    this.setState({ tasks: updatedTasks })
  }

  deleteTask = id => {
    const { tasks } = this.state

    const updatedTasks = tasks.filter(task => task.id !== id)

    this.setState({ tasks: updatedTasks })
  }

  completeTask = id => {
    const { tasks } = this.state
    
    const index = tasks.findIndex( task => task.id === id)
    
    tasks[index].isCompleted = !tasks[index].isCompleted

    this.setState({ tasks })
  }
  /*
  completeTask = id => {
    const { tasks } = this.state

    const checkedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })

    this.setState({ tasks: checkedTasks })
  }
  */

  /*
  deleteTask = id => {
    const { tasks } = this.state

    tasks.splice(tasks.findIndex(task => task.id === id), 1)

    this.setState({ tasks })
  }
  */
  render() {
    const { tasks } = this.state

    return (
      <div className='block'>
        <Control addTask={this.addTask} />
        <List deleteTask={this.deleteTask} completeTask={this.completeTask} tasks={tasks} />
      </div>
    )
  }
}

export { App }
