import React from "react";
import useUserState from "../utils/useUserState";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function DummyNav() {
  const [user, postUser, login, logout] = useUserState();
  const location = useLocation()

  return (
    <nav className="navbar navbar-expand-lg">
      <img
        src="/assets/images/CTREPresidioLogo.jpeg"
        alt="Logo"
        className="navbar-brand"
      ></img>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-md-0">
          <li className="nav-item">
            {/* <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a> */}
            <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/buildyourplan">
              Build a Plan
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/accountinfo">
              Account Info
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/sellersdetails">
              Sell
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mt-2 mt-md-0">
          <li className="nav-item">
            <button
              onClick={!user ? login : logout}
              type="button"
              className={user ? "btn-danger" : "btn-success"}
            >
              {user ? "Logout" : "Login"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
