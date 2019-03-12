import React, { Component } from 'react';
import './App.css';
import Form from './components/form/form';
import DataField from './components/dataField/dataField';
import Users from './components/users/users';

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="pageTitle">API Test</h1>
        <form className="form">
          <h3 className="subTitle2">User Details - Currently hardcoded, (dynamically generate later.)</h3>
          <Users />
          <br />
          <Form />
          <br />
          <h3 className="subTitle2">Returned Data - Dynamically generated dependant upon input in blue field above.</h3>
          <DataField />
        </form>
      </div>
    );
  }
}

export default App;