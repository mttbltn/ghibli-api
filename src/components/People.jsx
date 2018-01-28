import React, { Component } from "react";
import PeopleCard from "./PeopleCard";
import Jumbotron from "./Jumbotron";

export default class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(res => {
        console.log("First API response", res);
        return res.json();
      })
      .then(obj => {
        console.log("Original parsed data", obj);
        this.setState({ people: obj });
        console.log("Newly set state", this.state.people);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <div className="container">
          <PeopleCard peopleList={this.state.people} />
        </div>
      </React.Fragment>
    );
  }
}
