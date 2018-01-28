import React, { Component } from "react";

export default class FilmCard extends Component {
  render() {
    // parameter film can be named anything, it just represents a single in the array.
    let films = this.props.filmList.map(film => {
      return (
        <div className="card col-md-6" style={{ width: "20rem" }} key={film.id}>
          <img className="card-img-top w-100" src="" alt="" />
          <div className="card-block">
            <h1 className="card-title">{film.title}</h1>
            <p className="card-text">{film.description.substring(0, 250)}...</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{film.director}</li>
            <li className="list-group-item">{film.producer}</li>
            <li className="list-group-item">{film.release_date}</li>
          </ul>
        </div>
      );
    });

    return <div className="row p-1">{films}</div>;
  }
}
