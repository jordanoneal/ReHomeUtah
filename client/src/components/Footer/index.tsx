import React from "react";
import "./style.css";
import { Media } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer black-footer" >
            <div className="container">
                <div className="row">
                    <div className="column col-md-7">
                        {/* Include Social Media Here? */}
                        <header>Links</header>
                        <Link to="#">Contact Us</Link>
                        <Link to="#">Presidio Real Estate</Link>
                    </div>
                    <div className="column col-md-5">
                        <Media left>
                            <Media object src="/assets/images/White-Presidio_Logo.png" alt="Presidio Real Estate Logo"  style={{height: '100px'}}/>
                        </Media>
                        {/* <Media right>
                            <Media object src="/assets/images/IMG_0827.png" alt="Cole Tanner Real Estate Logo"/>
                        </Media> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;