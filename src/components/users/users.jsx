import React, { Component } from 'react';
import './users.css';

class Users extends Component {
  render() {
    const { user } = this.props;
    return (
      <table className="userTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Active</th>
            <th>Age</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.active.toString()}</td>
            <td>{user.age}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.company}</td>
            <td>{user.phone}</td>
          </tr>
        </tbody>
      </table >
    );
  }
}

export default Users;