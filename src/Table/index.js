import React, { Component } from 'react';
import tasks from '../data/tasks.json'


class Table extends Component {
  render() {
    return (
        <table>
        { 
          tasks.map(item => <Row data={ item }/>)
        }
        </table>
    );
  }
}

class Row extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    return (
      <tr key={data.id}>
        <td>{data.title}</td>
        <td>{data.note}</td>
        <td>Created: {data.creation_date}</td>
        <td>Due By: {data.due_date}</td>
        <td>
          <button type="button">Done</button>
        </td>
      </tr>
    )
  }
}


export default Table;
