import React, { Component } from 'react'
import { Button, ButtonGroup, ToggleButton, Form } from 'react-bootstrap'

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
        <Form.Control
          className='input'
          placeholder='Введи задачу'
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={inputValue}
        />

        <Button
          className='addbtn'
          variant='info'
          onClick={this.handleClick}
          >
          +
        </Button>

        <ButtonGroup toggle className='filter'>
          <ToggleButton
            type='radio'
            variant='outline-secondary'
            value='whole'
            checked={filter === 'whole'}
            onChange={this.handleFilterChange}
            >
            All
          </ToggleButton>
          <ToggleButton
            type='radio'
            variant='outline-secondary'
            value='done'
            checked={filter === 'done'}
            onChange={this.handleFilterChange}
            >
            Done
          </ToggleButton>
          <ToggleButton
            type='radio'
            variant='outline-secondary'
            value='incomplete'
            checked={filter === 'incomplete'}
            onChange={this.handleFilterChange}
            >
            Incomplete
          </ToggleButton>
        </ButtonGroup>
      </div>
    )
  }
}

export { Control }
