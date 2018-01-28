import React, { Component } from "react";
import HeaderImage from "../assets/Studio_Ghibli_logo.svg.png";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <img className="w-100 mx-auto" src={HeaderImage} alt="" />
      </div>
    );
  }
}
