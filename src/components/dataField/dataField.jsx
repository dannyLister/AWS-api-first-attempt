import React, { Component } from 'react';
import './dataField.css';

class DataField extends Component {
  render() {
    return (
      <table className="dataTable">
        <tr>
          <th>id</th>
          <th>active</th>
          <th>age</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>company</th>
          <th>phone</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </table >
    );
  }
}

export default DataField;