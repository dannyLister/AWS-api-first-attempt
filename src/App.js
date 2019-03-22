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
    err: null,
    isHidden: true,
  };

  componentDidMount = async () => {
    try {
      const people = await getPeople();
      this.setState({ people });
    } catch (err) {
      this.setState({ err })
    }
  }

  toggleHidden() {
    this.setState.handleClick({
      isHidden: !this.state.isHidden
    })
  }

  handleClick() {
    this.setState({ isHidden: false })
  }

  handleClick = this.handleClick.bind(this);

  render() {

    return (
      <div className="main">
        <h1 className="pageTitle">API Test</h1>
        <div className="form">
          <FormField />
          <button className="button" onClick={!this.state.isHidden} />
        </div>
        <div onClick={this.state.handleClick}>
          <h3 className="subTitle2">User Details</h3>
          <div {...this.handleClick}>
            {
              this.state.err
                ?
                <div>There was an error:
            {this.state.err.toString()}
                </div>
                :
                this.state.people.length > 0
                  ?
                  <Users persons={this.state.people} />
                  :
                  <div >
                    <LoaderEdit />
                  </div>
            }
          </div>
        </div>
      </div >
    );
  }
}


export default App;