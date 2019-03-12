import React, { Component } from 'react';
import './users.css';

class Users extends Component {
  render() {
    return (
      <table className="userTable">
        <tbody>
          <th>id</th>
          <th>active</th>
          <th>age</th>
          <th>firstName</th>
          <th>lastName</th>
          <th>company</th>
          <th>phone</th>
        </tbody>
        <tbody>
          <th>5c864ce46765b6a770460fb7</th>
          <th>false</th>
          <th>49</th>
          <th>Edna</th>
          <th>Mack</th>
          <th>CoveaInsurance</th>
          <th>01442 202197</th>
        </tbody>
      </table >
    );
  }
}

export default Users;