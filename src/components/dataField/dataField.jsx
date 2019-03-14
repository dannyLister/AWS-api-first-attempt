import React, { Component } from 'react';
import './dataField.css';
import '../userCard/UserCard';


class DataField extends Component {
  render() {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    let getRequest = new XMLHttpRequest();

    getRequest.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

    getRequest.onload = function () {
      let data = JSON.parse(this.response);

      if (getRequest.status >= 200 && getRequest.status < 399) {
        data.forEach((movie) => {

          const card = document.createElement('div');
          card.setAttribute('class', 'card'); //needs to be intiialised in render method className="card"

          const h1 = document.createElement('h1');
          h1.textContent = movie.title;

          const p = document.createElement('p');
          p.textContent = `${movie.description}...`;

          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(p);
        });

      }
    };

    getRequest.send();

    return (
      <div>
        <h1>API data goes here...</h1>
      </div>
    );
  }
}

export default DataField;