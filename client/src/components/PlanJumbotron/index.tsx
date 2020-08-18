import React from "react";
import "./style.css";
import {
    Jumbotron,
    Container
} from "reactstrap";

const PlanJumbotron = () => {
    return (
        <Jumbotron className="planJumbotron" fluid>
            <Container fluid>
                <h1 className="display-3">Build Your Plan</h1>
                <p className="lead">Let's Get Started</p>
            </Container>
        </Jumbotron>
    )
}

export default PlanJumbotron;