/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <h1>
            <a href="https://properties.cityinfoservices.com/gm-it-park-sector-142-noida/igmgtz8/pjd">
              G.M Online Servese Of Tecnologys Private L.M.T
            </a>
          </h1>
          <Link class="navbar-brand" to={"/"}>
            Table
          </Link>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <Link to={"create"} class="nav-link ">
                CreateUser
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
