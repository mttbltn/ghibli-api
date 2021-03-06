import React, { Component } from "react";
import FilmCard from "./FilmCard";
import Jumbotron from "./Jumbotron";

export default class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      films: []
    };
  }
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => {
        console.log("First API response", res);
        return res.json();
      })
      .then(obj => {
        console.log("Original parsed data", obj);
        this.setState({ films: obj });
        console.log("Newly set state", this.state.films);
      });
  }

  render() {
    return (
      <React.Fragment>
          <Jumbotron />
        <div className="container">
          <FilmCard filmList={this.state.films} />
        </div>
      </React.Fragment>
    );
  }
}
