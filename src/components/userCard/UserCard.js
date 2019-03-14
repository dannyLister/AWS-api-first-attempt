import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="header">
            <h3>firstName + lastName</h3>
            <h3>phoneNumber</h3>
          </div>
          <div className="image">
            <div className="placeHolder">
              <p>300 x 300</p>
            </div>
          </div>
          <div className="details">
            <p>Details</p>
            <div className="details1">
              <p>Company</p>
            </div>
            <div className="details2">
              <p>Age</p>
              <p>Active?</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;