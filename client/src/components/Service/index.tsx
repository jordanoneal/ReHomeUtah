import React from "react";
import {
  ListGroupItem,
  CustomInput,
  FormGroup,
  Input,
  Button,
  UncontrolledPopover,
  PopoverBody,
  Row,
  Col,
} from "reactstrap";
import { IServicesModel } from "../../../../models/services";
import { useState } from "react";
import "./style.css";

export interface ServiceProps {
  service: IServicesModel;
}

export const Service = (props: ServiceProps) => {
  const {
    service: { _id, serviceName, explanation, pricing },
  } = props;
  const [checked, setChecked] = useState(false);
  let PricingElement = null;
  const { Flat, Incremental, Options } = pricing;
  if (Flat) {
    PricingElement = <FormGroup>{Flat.price}</FormGroup>;
  } else if (Options && Options.length > 0) {
    console.log(`options: `);
    console.log(Options);
    PricingElement = (
      <FormGroup>
        <Input style={{
            border: "1px solid grey"
        }}
          type="select"
          name={`${serviceName}Options`}
          id={_id}
        >
          {/* loop through the array of options and generate a new option for each one */}
          {Options.map((option, index) => {
            return (
              <option id={`${serviceName}${index}`}>
                {option.description} {`$${option.price}`}
              </option>
            );
          })}
        </Input>
      </FormGroup>
    );
  } else if (Incremental) {
    console.log(Incremental);
    const genIncOpts = () => {
      const unitCountMin = Incremental.min;
      const unitCountMax = Incremental.max;
      const increment = Incremental.increment;
      let unitCount: number;
      let incOptionsArr = [];
      unitCount = unitCountMin;
      while (unitCount <= unitCountMax) {
        let newIncOpt = unitCount;
        incOptionsArr.push(newIncOpt);
        unitCount = unitCount + increment;
      }
      return incOptionsArr.map((newIncOpt) => {
        let a = 1;
        let b = a++;
        return (
          <option id={`${serviceName}${b}`}>{`${newIncOpt} at $${
            newIncOpt * Incremental.unitPrice
          }`}</option>
        );
      });
    };
    PricingElement = (
      <FormGroup>
        <Input style={{
            border: "1px solid grey"
        }}
          type="select"
          name={`${serviceName}Options`}
          id={_id}
        >
          {genIncOpts()}
        </Input>
      </FormGroup>
    );
  }
  const checkboxId = `${_id.split(" ").join("")}Checkbox`;
  const popoverId = `id${_id.split(" ").join("")}Popover`;
  return (
    <ListGroupItem style={{
        background: pricing.Included? "green": undefined
    }}>
      <Row className="align-items-center">
        <CustomInput
          type="checkbox"
          id={checkboxId}
          checked={pricing.Included ? true : checked}
          onClick={() => setChecked(!checked)}
          readOnly={!!pricing.Included}
        ></CustomInput>
        <Col xs="auto">
          <Button id={popoverId}
            style={{
                background: "transparent",
                color: "dodgerblue",
                border: "none"
            }}
          >
            <i className="fas fa-info-circle"></i>
          </Button>
        </Col>
        <Col xs={3}>{serviceName}</Col>
        <Col sx={3}>{PricingElement}</Col>
        <UncontrolledPopover
          trigger="focus"
          placement="bottom"
          target={`#${popoverId}`}
        >
          <PopoverBody>{explanation}</PopoverBody>
        </UncontrolledPopover>
      </Row>
    </ListGroupItem>
  );
};
