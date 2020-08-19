import React from "react";
import "./style.css";
import {
    Button,
    Jumbotron
} from "reactstrap";

const HomeJumbotron = () => {
    return(
        <Jumbotron className="homeJumbotron">
            <h1 className="display-3">There is a problem with the way real estate is being done.</h1>
            <p className="display-5">No one wants to awkwardly haggle with a realtor over the pricing of services. Your home is as unique as you are, so why shouldn't your home's marketing plan be personalized to fit you, too?</p>
            <hr className="my-2" />
            <p className="lead">At Cole Tanner Real Estate of Salt Lake City, we know one size doesn't fit all. That's why we make it easy for you to choose the perfect marketing plan for you while providing you with excellent service and transparency.</p>
            <p className="lead">
                {/* onclick={} */}
                <Button color="success" href="/buildyourplan">Build a Plan to Learn More</Button>
            </p>
        </Jumbotron>
    )
}

export default HomeJumbotron;