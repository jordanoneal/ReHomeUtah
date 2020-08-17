import React from "react";
import {
    ListGroupItem,
    CustomInput,
    Tooltip
} from "reactstrap";
import { IServicesModel } from "../../../../models/services";
import { useState } from "react";

export interface IncludedServiceProps {
    _id: string,
    serviceName: string,
    explanation: string
}

export const IncludedService = (props: IncludedServiceProps ) => {
    const { _id, serviceName, explanation } = props;
    const [ services, setServices ] = useState<IServicesModel[]>([]);

    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    return (
        <ListGroupItem >
            {/* id={_id} <Tooltip placement="right" isOpen={tooltipOpen} target={_id} toggle={toggleTooltip}> {explanation} </Tooltip> */}
            <CustomInput type="checkbox" checked={true} readOnly> {serviceName} 
            </CustomInput>
        </ListGroupItem>
    )
}