import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';

class LoaderEdit extends React.Component {
  render() {
    return (
      <div className="loaderContainer">
        <div className="loaderBox">
          <Loader
            type="Bars"
            color="Orange"
            height="100%"
            width="100%"
          />
        </div>
      </div>
    );
  }
}

export default LoaderEdit;

