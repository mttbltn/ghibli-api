import React, { Component } from "react";

export default class App extends Component {
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(obj => console.log(obj));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello World</h1>
      </React.Fragment>
    );
  }
}
