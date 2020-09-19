import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.less";
import { Jumbotron } from "../jumbotron";
import { Button } from "reactstrap";
import classNames from "classnames";

const HomeJumbotron = () => {
  return (
    <Jumbotron img="/assets/images/Key-with-keychain-in-a-house-shape-and-family-in-the-door-keyhole...60677_3797x2531.jpeg" imageStyles={styles.image} containerStyles={styles.container}>
      <h2 className={classNames("display-4", styles.header)}>Start your adventure!</h2>
      <p className={classNames("lead", styles.subHeader)}>order services today.</p>
      <div className={styles.buttons}>
        <Link to="/buildyourplan">
          <Button color="success">Sell <span className={styles.buttonExtra}>a Home</span></Button>
        </Link>
        <Link to="/buyerdetails">
          <Button color="success">Buy <span className={styles.buttonExtra}>a Home</span></Button>
        </Link>
      </div>
    </Jumbotron>
  );
};

export default HomeJumbotron;
