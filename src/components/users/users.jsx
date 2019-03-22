import React, { Component } from 'react';
import './users.css';

class Users extends Component {

  render() {

    console.log(this.props);
    const { persons } = this.props;
    console.log("PROPS MATE", this.props)
    return (
      <table className="userTable" >
        <thead>
          <tr className="th">
            <th>Id</th>
            <th>Active</th>
            <th>Age</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Company</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody className="userTable" onChange={this.handleChange}>
          {persons.map(person => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{`${person.isActive}`}</td>
              <td>{person.age}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.company}</td>
              <td>{person.phone}</td>
            </tr>
          ))}
        </tbody>
      </table >
    );
  }
}

export default Users;