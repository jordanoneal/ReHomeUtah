import React, { useState, useEffect } from "react";
import styles from "./Nav.module.less";
import { Link, useHistory, useLocation } from "react-router-dom";
import classNames from "classnames";
import useUserState from "../utils/useUserState";

export default function Nav() {
  const {user, logout} = useUserState();
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const history = useHistory();

  const loginClick = () => {
    if (!user) {
      history.push("/login");
    } else {
      logout();
    }
  };

  useEffect(() => {
    if (navOpen) {
      const clickHandler = () => {
        setNavOpen(false);
      }
      document.addEventListener("click", clickHandler);
      return () => {
        document.removeEventListener("click", clickHandler);
      }
    }
  }, [navOpen]);

  return (
    <>
      <div className={styles.navPlaceholder}/>
      <nav className={styles.nav}>
        <Link
          to="/"
          className={
            location.pathname === "/" ? "nav-link active" : "nav-link"
          }
        >
          <img
            src="/assets/images/ctre-logo-slim.png"
            alt="Logo"
            className={styles.logo}
          ></img>
        </Link>
        <button className={styles.hamburgerMenu} onClick={() => setNavOpen(v => !v)}>
          <i className="fas fa-bars"/>
        </button>
        <div className={classNames(styles.navLinkContainer, navOpen && styles.open)}>
          <ul className={styles.navLinks}>
            {/* <li>
              <Link
                to="/about"
                className={
                  location.pathname === "/about" ? "nav-link active" : "nav-link"
                }
              >
                About
                <span className={styles.border}/>
              </Link>
            </li> */}
            <li>
              <Link
                to="/buildyourplan"
                className={
                  location.pathname === "/buildyourplan"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Sell
                <span className={styles.border}/>
              </Link>
            </li>
            <li>
              <Link
                to="/buyersdetails"
                className={
                  location.pathname === "/buyersdetails"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Buy
                <span className={styles.border}/>
              </Link>
            </li>
            {user && <li>
              <Link
                to="/accountinfo"
                className={
                  location.pathname === "/accountinfo"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Account Info
                <span className={styles.border}/>
              </Link>
            </li>}
            <li>
              <button
                onClick={loginClick}
                className={classNames(user ? styles.logoutBtn : styles.loginBtn, "nav-link")}
              >
                {user ? "Logout" : "Login"}
                <span className={styles.border}/>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
