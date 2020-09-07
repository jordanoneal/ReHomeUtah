import React, {useCallback} from "react";
import {
  ListGroupItem,
  FormGroup,
  UncontrolledPopover,
  PopoverBody,
  CustomInput,
} from "reactstrap";
import { IServicesModel } from "../../../../models/services";
import styles from "./style.module.css";
import { PricingOptions } from "./pricing-options";
import { PricingIncremental } from "./pricing-incremental";
import { useServiceSelection } from "../../utils/useServiceSelection";
import formatUSD from "../../utils/format-usd";
import classNames from "classnames";

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
    const checkboxId = `${_id.split(" ").join("")}Checkbox`;
    PricingElement = <FormGroup>
      <CustomInput
        type="checkbox"
        id={checkboxId}
        checked={pricing.Included ? true : selected}
        onClick={() => setServiceSelection({selected: !selected, serviceId: _id})}
        readOnly={!!pricing.Included}
      >{formatUSD(Flat.price)}</CustomInput>
    </FormGroup>;
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
  const popoverId = `id${_id.split(" ").join("")}Popover`;
  return (
    <ListGroupItem
      style={{
        background: pricing.Included ? "#3f7521" : undefined,
        color: pricing.Included ? 'white' : undefined
      }}
    >
      <div className={styles.item}>
        <div className={styles.itemTitle}>
          <div
            id={popoverId}
            className={styles.iButton}
            tabIndex={-1}
          >
            {/* trick to force the "i" in thie info icon to be white. */}
            <div className={styles.iWhiteBoxBackground}/>
            <i className={classNames("fas fa-info-circle", styles.i)}></i>
            {/* this <i> tag is to fill the size of the element since the other two elements are absolute positioning and don't take up space. */}
            <i className={"fas fa-info-circle"} style={{opacity: 0}}></i>
          </div>
          <div className={styles.serviceName}>{serviceName}</div>
        </div>
        {PricingElement}
        <UncontrolledPopover
          trigger="focus"
          placement="bottom"
          target={`#${popoverId}`}
        >
          <PopoverBody>{explanation}</PopoverBody>
        </UncontrolledPopover>
      </div>
    </ListGroupItem>
  );
};
