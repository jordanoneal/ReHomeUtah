import React from "react";
import styles from "./style.module.css";
import classNames from 'classnames';
import {
    Jumbotron,
} from "reactstrap";

const PlanJumbotron = () => {
    return (
        <Jumbotron className={styles.planJumbotron}>
            <img alt="" src="/assets/images/manHoldingCompass.jpeg" className={styles.image}/>
            <div className={styles.container}>
                <h1 className={classNames("display-4", styles.header)}>Build Your Plan</h1>
                <p className={classNames("lead", styles.started)}>Let's Get Started</p>
            </div>
        </Jumbotron>
    )
}

export default PlanJumbotron;