import React from "react";
import { Media } from "reactstrap";

const JourneyMedia = () => {
    return(
        <Media>
            <Media left style={{width: '50%'}}>
                <Media object src="/assets/images/Giving-a-helping-hand-1163040276_6598x4283.jpeg" alt="A happy family walking on a path in the woods." style={{width: '100%'}}/>
            </Media>
            <Media body>
                <Media heading>
                    Do yourself a favor and start your journey by letting us help you buy/sell your Utah home.
                </Media>
            </Media>
        </Media>
    )
}
export default JourneyMedia;