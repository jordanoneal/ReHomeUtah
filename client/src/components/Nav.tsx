import React, { useState, useEffect } from "react";
// import useUserState from "../utils/useUserState";
import styles from "./Nav.module.less";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

export default function Nav() {
  // const [user, , , logout] = useUserState();
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  // const history = useHistory();

  // const loginClick = () => {
  //   if (!user) {
  //     history.push("/login");
  //   } else {
  //     logout();
  //   }
  // };

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
            <li>
              <Link
                to="/about"
                className={
                  location.pathname === "/about" ? "nav-link active" : "nav-link"
                }
              >
                About
                <span className={styles.border}/>
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
                <span className={styles.border}/>
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
                <span className={styles.border}/>
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
                <span className={styles.border}/>
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
    </>
  );
}
