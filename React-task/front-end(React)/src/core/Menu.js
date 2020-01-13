import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticate } from "../auth";
const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#ff9900" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => (
  <nav className="navbar navbar-expand-lg fixed-top  bg-primary">
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link" to="/" style={isActive(history, "/")}>
          Home
        </Link>
      </li>

      {isAuthenticate() && isAuthenticate().user.role === 0 && (
        <li className="nav-item">
          <Link
            className="nav-link"
            to="/user/dashboard"
            style={isActive(history, "/user/dashboard")}
          >
            Dashboard
          </Link>
        </li>
      )}

      {!isAuthenticate() && (
        <Fragment>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/signin"
              style={isActive(history, "/signin")}
            >
              Signin
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/signup"
              style={isActive(history, "/signup")}
            >
              Signup
            </Link>
          </li>
        </Fragment>
      )}
      {isAuthenticate() && (
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={() =>
              signout(() => {
                history.push("/");
              })
            }
            style={{ cursor: "pointer", color: "#ffffff" }}
          >
            Signout
          </span>
        </li>
      )}
      <li className="nav-item">
        <Link
          className="nav-link"
          to="/about"
          style={isActive(history, "/about")}
        >
          About Us
        </Link>
      </li>
    </ul>
  </nav>
);

export default withRouter(Menu);
