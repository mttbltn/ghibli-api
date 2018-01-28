import React, { Component } from "react";
import { Link } from "react-router-dom";
import WelcomeImage from "../assets/ghibli_welcome.jpg";

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <img className="w-100 mx-auto" src={WelcomeImage} alt="" />
        <Link className="btn btn-primary" to="/films">
          Show Films
        </Link>
        <Link className="btn btn-primary" to="/people">
          Show People
        </Link>
      </div>
    );
  }
}
