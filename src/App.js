import React, { Component } from 'react';
import './App.css';
import FormField from './components/form/form';
import Users from './components/users/users';
import { getPerson } from './services/person.service.fake';

class App extends Component {
  state = {
    person: null
  };

  componentDidMount() {
    const person = getPerson();
    this.setState({ person });
  }

  render() {
    return (
      <div className="main">
        <h1 className="pageTitle">API Test</h1>
        <div className="form">
          <br />
          <FormField />
          <br />
          {/* <h3 className="subTitle2">Returned Data - Dynamically generated dependant upon input in blue field above.</h3>
          <DataField /> */}
          <h3 className="subTitle2">User Details - Currently hardcoded, (dynamically generate later.)</h3>
          {
            this.state.person &&
            <Users user={this.state.person} />
          }
        </div>
        {/* <UserCard /> */}
      </div >
    );
  }
}


export default App;