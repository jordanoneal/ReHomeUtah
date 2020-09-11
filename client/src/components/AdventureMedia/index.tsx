import React from "react";
import { Media } from "reactstrap";

const AdventureMedia = () => {
    return(
        <Media>
            <Media body>
                <Media heading>Buying and selling a home is an exciting way to start a new adventure.</Media>
            </Media>
            <Media right style={{width: '50%'}}>
                <Media object src="/assets/images/Two-children-little-girls-home-in-a-cardboard-ship-play-captains.jpeg" alt="Two ittle girls play captains with a cardboard ship." style={{width: '100%'}}/>
            </Media>
        </Media>
    )
}

export default AdventureMedia;