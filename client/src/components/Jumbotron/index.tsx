import React from "react";
import "./style.css";
import {
    Button,
    Jumbotron
} from "reactstrap";

const HomeJumbotron = () => {
    return(
        <Jumbotron class="jumbotron">
            <h1 className="display-3">There is a problem with the way real estate is being done.</h1>
            <p className="lead">People don't want to awkwardly haggle with their realtor over the pricing of services. Why shouldn't people be able to choose the marketing plan they want while getting excellent service and transparency?</p>
            <hr className="my-2" />
            <p>Cole Tanner Real Estate will allow you to pick out the marketing plan right for you and your home.</p>
            <p className="lead">
                {/* onclick={} */}
                <Button color="success" href="/buildyourplan">Build a Plan to Learn More</Button>
            </p>
        </Jumbotron>
    )
}

export default HomeJumbotron;