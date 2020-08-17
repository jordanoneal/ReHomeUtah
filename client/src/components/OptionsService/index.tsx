import React from "react";
import {
    ListGroupItem,
    CustomInput,
    Tooltip,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { IServicesModel } from "../../../../models/services";
import { useState } from "react";
import { IServicePricingOption } from "../../../../interfaces/services";

export interface OptionServiceProps {
    _id: string,
    serviceName: string,
    explanation: string,
    // an array of options for the dropdown
    options: IServicePricingOption[]
}

export const OptionService = (props: OptionServiceProps) => {
    const { _id, serviceName, explanation, options} = props;
    const [ services, setServices ] = useState<IServicesModel[]>([]);

    const [ tooltipOpen, setTooltipOpen ] = useState(false);
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    return(
        <ListGroupItem >
            {/* id={_id}><Tooltip placement="right" isOpen={tooltipOpen} target={_id} toggle={toggleTooltip}> {explanation} </Tooltip> <CustomInput type="checkbox"  </CustomInput>*/}
            <CustomInput type="checkbox" > {serviceName} </CustomInput>
            <FormGroup>
                <Label for={_id}>Select</Label>
                <Input type="select" name={`${serviceName}Options`} id={_id}>
                {/* loop through the array of options and generate a new option for each one */}
                {
              options.map(option => {
                return(
                    <option>{option.description} {`$${option.price}`}</option>
                )
              })
          }
        </Input>
      </FormGroup>
        </ListGroupItem>
    )
}

