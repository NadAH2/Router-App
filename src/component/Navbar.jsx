import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = ({}) => {
  const [title, setTitle] = useState(["Kids Movies"]);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark mb-4"
      style={{ borderBottom: "solid 1px #cdcdcd", backgroundColor: " Indigo" }}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          {title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
