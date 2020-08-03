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
          classname='mb-2'
          id='inlineFormInput'
          placeholder='Введи задачу'
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={inputValue}
        />

        <Button
          variant='info'
          onClick={this.handleClick}
          >
          +
        </Button>

        <ButtonGroup toggle>
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
            done
          </ToggleButton>
          <ToggleButton
            type='radio'
            variant='outline-secondary'
            value='incomplete'
            checked={filter === 'incomplete'}
            onChange={this.handleFilterChange}
            >
            incomplete
          </ToggleButton>
        </ButtonGroup>
      </div>
    )
  }
}

export { Control }
