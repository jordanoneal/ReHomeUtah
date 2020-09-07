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
    const {incremental: {min, max, increment, unitPrice, unitName}, onSelectionChange, selection} = props;

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
          <option key={count} value={count}>{`${unitPrice ? count + ' for ' : ''}${formatUSD(value)}`}</option>
        );
      });
    };

    return (
      <FormGroup style={{display: 'flex', alignItems: 'center'}}>
        {unitName ? unitName + ': ' : ''}
        <Input style={{
            border: "1px solid grey"
        }}
          type="select"
          onChange={(e) => onSelectionChange(Number(e.currentTarget.value))}
          value={selection}
        >
            <option key={-1} value={-1}>None Selected</option>
            {genIncOpts()}
        </Input>
      </FormGroup>
    );
    
}