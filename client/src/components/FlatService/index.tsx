import React from "react";
import {
    ListGroupItem,
    CustomInput,
    Tooltip
} from "reactstrap";
import { IServicesModel } from "../../../../models/services";
import { useState } from "react";
import { IFlatPricing } from "../../../../interfaces/services";

export interface FlatServiceProps {
    _id: string,
    serviceName: string,
    explanation: string,
    pricing: {
        Flat? : IFlatPricing
    }
}

export const FlatService = (props: FlatServiceProps) => {
    const { _id, serviceName, explanation, pricing } = props;
    const [ services, setServices ] = useState<IServicesModel[]>([]);
    const [ checked, setChecked ] = useState(false);
    const [ tooltipOpen, setTooltipOpen ] = useState(false);
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    return(
        //  id={_id} <Tooltip placement="right" isOpen={tooltipOpen} target={_id} toggle={toggleTooltip}> {explanation} </Tooltip>
        <ListGroupItem>
            <CustomInput type="checkbox" id={`${serviceName}Checkbox`} check={checked} onClick={() => setChecked(!checked)} checked={checked}> {serviceName} {`Price: $${pricing.Flat?.price}`}</CustomInput>
        </ListGroupItem>
    )
}