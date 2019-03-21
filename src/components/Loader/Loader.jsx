import React from 'react';
import Loader from 'react-loader-spinner';
import './Loader.css';

class LoaderEdit extends React.Component {
  render() {
    return (
      <div className="loaderContainer">
        <div className="loaderBox">
          <Loader />
        </div>
      </div>
    );
  }
}

export default LoaderEdit;

