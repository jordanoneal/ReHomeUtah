import React, {useCallback} from "react";
import {
  ListGroupItem,
  CustomInput,
  FormGroup,
  Button,
  UncontrolledPopover,
  PopoverBody,
  Row,
  Col,
} from "reactstrap";
import { IServicesModel } from "../../../../models/services";
import "./style.css";
import { PricingOptions } from "./pricing-options";
import { PricingIncremental } from "./pricing-incremental";
import { useServiceSelection } from "../../utils/useServiceSelection";
import formatUSD from "../../utils/format-usd";

export interface ServiceProps {
  service: IServicesModel;
}

export const Service = (props: ServiceProps) => {
  const { service: { _id, serviceName, explanation, pricing } } = props;
  const [{selected, selection}, setServiceSelection] = useServiceSelection(_id);

  const handleSelectionChange = useCallback((selection: number) => setServiceSelection({selected: selection > -1, serviceId: _id, selection}), [_id, setServiceSelection])

  const { Flat, Incremental, Options } = pricing;
  let PricingElement = null;
  if (Flat) {
    PricingElement = <FormGroup>{formatUSD(Flat.price)}</FormGroup>;
  } else if (Options && Options.length > 0) {
    PricingElement = ( 
      <PricingOptions
        options={Options}
        onSelectionChange={handleSelectionChange}
        selection={(selection === undefined) ? -1 : selection}
      />
    );
  } else if (Incremental) {
    PricingElement = (
      <PricingIncremental
        incremental={Incremental}
        onSelectionChange={handleSelectionChange}
        selection={selection === undefined ? -1 : selection}
      />
    );
  }
  const checkboxId = `${_id.split(" ").join("")}Checkbox`;
  const popoverId = `id${_id.split(" ").join("")}Popover`;
  return (
    <ListGroupItem
      style={{
        background: pricing.Included ? "lawngreen" : undefined,
      }}
    >
      <Row className="align-items-center">
        <CustomInput
          type="checkbox"
          id={checkboxId}
          checked={pricing.Included ? true : selected}
          onClick={() => setServiceSelection({selected: !selected, serviceId: _id})}
          readOnly={!!pricing.Included}
        ></CustomInput>
        <Col xs="auto">
          <Button
            id={popoverId}
            style={{
              background: "transparent",
              color: "dodgerblue",
              border: "none",
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
