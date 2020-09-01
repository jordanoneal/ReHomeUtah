import React from 'react';
import { FormGroup, Input } from 'reactstrap';
import { IIncrementalPricing } from '../../../../interfaces/services';
import formatUSD from '../../utils/format-usd';

export interface PricingIncrementalProps {
    incremental: IIncrementalPricing
    onSelectionChange(selection: number): void;
    selection: number;
}

export const PricingIncremental: React.FC<PricingIncrementalProps> = (props: PricingIncrementalProps) => {
    const {incremental: {min, max, increment, unitPrice}, onSelectionChange, selection} = props;

    const genIncOpts = () => {
      let unitCount: number;
      const incOptionsArr = [];
      unitCount = min;
      while (unitCount <= max) {
        incOptionsArr.push(unitCount);
        unitCount += increment;
      }
      return incOptionsArr.map((count) => {
        const value = count * (unitPrice || 1)
        return (
          <option key={count} value={count}>{`${unitPrice ? count + ' at ' : ''}${formatUSD(value)}`}</option>
        );
      });
    };

    return (
      <FormGroup>
        <Input style={{
            border: "1px solid grey"
        }}
          type="select"
          onChange={(e) => onSelectionChange(Number(e.currentTarget.value))}
          value={selection}
        >
            <option key={-1} value={-1}>Select an Option</option>
            {genIncOpts()}
        </Input>
      </FormGroup>
    );
    
}