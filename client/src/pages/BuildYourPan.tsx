import React, { useState, useEffect, Suspense } from "react";
import { Link } from "react-router-dom";
import { IServicesModel } from "../../../models/services";
import { Service } from "../components/Service";
import API from "../utils/API";
import PlanJumbotron from "../components/PlanJumbotron";
import {
    Container,
    Row,
    Col,
    ListGroup,
    Button,
} from "reactstrap";

export const BuildYourPlan = () => {
    const [services, setServices] = useState<IServicesModel[]>([]);

    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggle = () => {
    //     setDropdownOpen(prevState => !prevState);
    // }

    useEffect(() => {
        API.getServices().then((res) => {
            setServices(res.data)
        })
    }, []);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PlanJumbotron></PlanJumbotron>
            <br></br>
            <Row>
                <Col xs={12}>
                    {/* <Container classname=“themed-container”> */}
                    <Container className="themed-container" >
                        <ListGroup style={{ whiteSpace: "pre" }}>{services.map(service => {
                            return <Service key={service._id} service={service} />
                        })}
                        </ListGroup>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Link to="/accountinfo">
                        <Button color="primary"> Save and Continue </Button>
                    </Link>
                </Col>
            </Row>
        </Suspense>
    )
}
