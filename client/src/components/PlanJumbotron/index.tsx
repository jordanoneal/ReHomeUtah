import React from "react";
import styles from "./style.module.css";
import classNames from 'classnames';
import { Jumbotron } from "../jumbotron";

const PlanJumbotron = () => {
    return (
        <Jumbotron img="/assets/images/manHoldingCompass.jpeg" containerStyles={styles.container} darkBackground>
            <h1 className={classNames("display-4", styles.header)}>Build Your Plan</h1>
            <p className={classNames("lead", styles.subHeader)}>{"Let's Get Started"}</p>
        </Jumbotron>
    )
}

export default PlanJumbotron;