import React, { Component } from "react";

export default class PeopleCard extends Component {
  render() {
    let people = this.props.peopleList.map(people => {
      return (
        <div
          className="card col-md-6"
          style={{ width: "20rem" }}
          key={people.id}
        >
          <img className="card-img-top w-100" src="" alt="" />
          <div className="card-block">
            <h1 className="card-title">{people.name}</h1>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{people.gender}</li>
            <li className="list-group-item">{people.age}</li>
            <li className="list-group-item">{people.eye_color}</li>
            <li className="list-group-item">{people.hair_color}</li>
            <li className="list-group-item">{people.films}</li>
            <li className="list-group-item">{people.species}</li>
          </ul>
        </div>
      );
    });

    return <div className="row p-1">{people}</div>;
  }
}
