import React, { Component } from 'react';
import './dataField.css';
import axios from 'axios';

class DataField extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get('https://u807vstsr9.execute-api.eu-west-2.amazonaws.com/dev/people?id=5c864ce46765b6a770460fb7')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person) =>
          <li>{person.name}</li>)}
      </ul>
    )
  }
}



export default DataField;