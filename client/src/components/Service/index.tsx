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

export interface ServiceProps {
    service: IServicesModel
}

export const Service = (props: ServiceProps) => {
    const { service: { _id, serviceName, explanation, pricing } } = props;
    const [services, setServices] = useState<IServicesModel[]>([]);
    const [checked, setChecked] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState(false);
    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
    let PricingElement = null;
    const { Flat, Incremental, Included, Options} = pricing;
    if (Flat) {
        PricingElement = Flat.price
    } else if (Options && Options.length > 0) {
        console.log(`options: `);
        console.log(Options);
        PricingElement = <FormGroup>
            <Label for={_id}>Select</Label>
            <Input type="select" name={`${serviceName}Options`} id={_id}>
                {/* loop through the array of options and generate a new option for each one */}
                {
                    Options.map(option => {
                    return (
                        <option>{option.description} {`$${option.price}`}</option>
                    )
                })
                }
            </Input>
        </FormGroup>
    } else if (Incremental) {
        console.log(pricing.Incremental);
        const genIncOpts = () => {
            const unitCountMin = Incremental.min;
            const unitCountMax = Incremental.max;
            const increment = Incremental.increment;
            let unitCount: number;
            let incOptionsArr = [];
            unitCount = unitCountMin;
            while ( unitCount < unitCountMax ) {
                let newIncOpt = unitCount;
                incOptionsArr.push(newIncOpt);
                unitCount = unitCount + increment;
            }
            return (incOptionsArr.map(newIncOpt => {
                return(
                    <option>{`${newIncOpt} at $${newIncOpt * Incremental.unitPrice}`}</option>
                )
            }));
        }
        PricingElement = <FormGroup>
            <Label for={_id}>Select</Label>
            <Input type="select" name={`${serviceName}Options`} id={_id}>
                {
                    genIncOpts()
                }
            </Input>
        </FormGroup>
    } 
    const checkboxId = `${serviceName.split(" ").join("")}
    Checkbox`;
    return (
        <ListGroupItem>
            <CustomInput type="checkbox" id={checkboxId} checked={pricing.Included ? true : checked} onClick={() => setChecked(!checked)} readOnly={!!pricing.Included} > {serviceName} {PricingElement}</CustomInput>
            {/* <Tooltip placement="right" isOpen={tooltipOpen} target={checkboxId} toggle={toggleTooltip}> {explanation} </Tooltip> */}
        </ListGroupItem>
    )
}