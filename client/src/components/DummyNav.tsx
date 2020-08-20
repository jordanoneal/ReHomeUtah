import React, { useState } from "react";
import useUserState from "../utils/useUserState";
import "../styles/Navbar.css";
import { Link, useLocation, Redirect, useHistory } from "react-router-dom";

export default function DummyNav() {
  const [user, postUser, login, logout] = useUserState();
  const location = useLocation();
  const history = useHistory();

  const loginClick = () => {
    if (!user) {
      history.push("/login");
    } else {
      logout();
    }
  };

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
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/buildyourplan"
              className={
                location.pathname === "/buildyourplan"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Build a Plan
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/accountinfo"
              className={
                location.pathname === "/accountinfo"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Account Info
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sellersdetails"
              className={
                location.pathname === "/sellersdetails"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sell
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto mt-2 mt-md-0">
          <li className="nav-item">
            <button
              onClick={loginClick}
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
