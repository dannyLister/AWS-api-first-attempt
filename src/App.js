import React, { Component } from 'react';
import LoaderEdit from './components/Loader/Loader';
import './App.css';
import FormField from './components/form/form';
import Users from './components/users/users';
import { getPeople } from './services/person.service';
import './components/Loader/Loader.css';

class App extends Component {
  state = {
    people: [],
    err: null
  };

  componentDidMount = async () => {
    try {
      const people = await getPeople();
      this.setState({ people });
    } catch (err) {
      this.setState({ err })
    }
  }
  render() {
    return (
      <div className="main">
        <h1 className="pageTitle">API Test</h1>
        <div className="form">
          <br />
          <FormField />
          <br />
          <h3 className="subTitle2">User Details</h3>
          {
            this.state.err ?
              <div>There was an error: {this.state.err.toString()} </div>
              : this.state.people.length > 0 ?
                <Users persons={this.state.people} />
                :
                <LoaderEdit className="loader"
                  type="TailSpin"
                  color="Orange"
                  height="25%"
                  width="25%"
                />
          }
        </div>
      </div >
    );
  }
}

export default App;