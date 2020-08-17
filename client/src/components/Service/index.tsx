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
import { IFlatPricing } from "../../../../interfaces/services";

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
    if (pricing.Flat) {
        PricingElement = pricing.Flat.price
    } else if (pricing.Incremental) {
        // PricingElement = pricing.Incremental.unitPrice;
    } else if (pricing.Options && pricing.Options.length > 0) {
        console.log(`options: `);
        console.log(pricing.Options);
        PricingElement = <FormGroup>
            <Label for={_id}>Select</Label>
            <Input type="select" name={`${serviceName}Options`} id={_id}>
                {/* loop through the array of options and generate a new option for each one */}
                {pricing.Options.map(option => {
                    return (
                        <option>{option.description} {`$${option.price}`}</option>
                    )
                })
                }
            </Input>
        </FormGroup>
    } else if (pricing.Incremental) {
        console.log(pricing.Incremental);
        // min, mx, unitPrice, increment
        PricingElement = <FormGroup>
            <Label for={_id}>Select</Label>
            <Input type="select" name={`${serviceName}Options`} id={_id}>
                {/* start with unitPrice */}
                {/* minimum number of units */}
                {/* maximum number of units */}
                {/* increment by incrementNum */}
                {/* make a price array. priceArr = */}
                {/* priceArr.forEach(<DropdownItem>) */}
                {/* for (i = min; i++; i < max) */}
                {/* but it can't be a for loop because of i++ needing to be other incremements not just incremenets of 1 but of 2,3,5,10,1000, etc. */}
                {/* min, max, increment, unitPrice
                unitPrice = 2
                increment = 5
                min = 5
                max = 30
                [10, 15, 20, 25, 30] */}
                {/* let sequenceArray = [];
                sequenceArray.push() */}
                {/* sequenceArray.push(min + increment); to start*/}
                {/* let min = x;
                let max = y;
                let pricingArr = [];
                const [unitPrice, setUnitPrice] = useState(price);
                
                async function increment(incrementVal) {
                    await setUnitPrice(unitPrice + increment);
                    pricingArr.push(unitPrice);
                }
                // then filter the pricing array by minimum and maximum values
                let finalPricingArr = pricingArr.filter(
                    // logic to filter out values not in min/max range
                )
                */}
                

            </Input>
        </FormGroup>
    }

    return (
        //  id={_id} <Tooltip placement="right" isOpen={tooltipOpen} target={_id} toggle={toggleTooltip}> {explanation} </Tooltip>
        <ListGroupItem>
            <CustomInput type="checkbox" id={`${serviceName}
            Checkbox`} checked={pricing.Included ? true : checked} onClick={() => setChecked(!checked)} readOnly={!!pricing.Included} > {serviceName} {PricingElement}</CustomInput>
        </ListGroupItem>
    )
}