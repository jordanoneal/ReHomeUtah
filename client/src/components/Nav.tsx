import React from "react";
import useUserState from "../utils/useUserState";
import styles from "./Nav.module.css";
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Nav() {
  // const [user, , , logout] = useUserState();
  const location = useLocation();
  // const history = useHistory();

  // const loginClick = () => {
  //   if (!user) {
  //     history.push("/login");
  //   } else {
  //     logout();
  //   }
  // };

  return (
    <nav className={styles.nav}>
      <div className={styles.logoTab}>
        <img
          src="/assets/images/IMG_0827.png"
          alt="Logo"
          className={styles.logo}
        ></img>
      </div>

      <div className={styles.navLinkContainer}>
        <ul className={styles.navLinks}>
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={
                location.pathname === "/about" ? "nav-link active" : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li>
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
          <li>
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
          <li>
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
        {/* <ul>
          <li>
            <button
              onClick={loginClick}
              type="button"
              className={user ? "btn-danger" : "btn-success"}
            >
              {user ? "Logout" : "Login"}
            </button>
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
