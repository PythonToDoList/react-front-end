import React, { Component } from 'react'
import tasks from '../data/tasks.json'


const TaskList = _ =>
    <ul>
    { 
      tasks.map(item => <Row task={ item }/>)
    }
    </ul>


class Row extends Component {
  clicked() {
    console.log('An element was clicked.')
  }
  hasDueDate( task ) {
    if (task.due_date) {
      return <p>Due By: {task.due_date}</p>
    }
  }
  render() {
    const { task } = this.props
    return (
      <li key={task.id} onClick={ this.clicked }>
        <p>{task.title}</p>
        { this.hasDueDate(task) }
      </li>
    )
  }
}

const Overdue = _ => 
  <div>
  <h2>Overdue</h2>
    <TaskList />
  </div>
const ComingUp = _ => 
  <div>
  <h2>Coming Up</h2>
    <TaskList />
  </div>
const Timeless = _ => 
  <div>
  <h2>Timeless</h2>
    <TaskList />
  </div>
const Completed = _ =>
  <div>
  <h2>Last Completed</h2>
    <TaskList />
  </div>

export {Overdue, ComingUp, Timeless, Completed};
