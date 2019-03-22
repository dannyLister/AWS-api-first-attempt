import React, { Component } from 'react';
import './form.css';

class FormField extends Component {



  render() {
    return (
      <div className="formField">
        <h3 className="subtitle">API input(s)</h3>
        <form>
          User Id:
          <input className="inputBox"
            placeholder="enter user id"
          />
          <br />
          {/* <button className="button"
            onClick={this.handleClick}
          >Submit</button> */}
        </form>
      </div>
    );
  }
}


export default FormField;