import React from 'react'
import { FormGroup, Input } from 'reactstrap';
import { IOptionsPricing } from '../../../../interfaces/services';
import formatUSD from '../../utils/format-usd';

export interface PricingOptionsProps {
    options: IOptionsPricing;
    onSelectionChange(selection: number): void;
    selection: number;
    disabled?: boolean;
}

export const PricingOptions: React.FC<PricingOptionsProps> = (props: PricingOptionsProps) => {
    const {options, onSelectionChange, selection, disabled} = props;
    return <FormGroup>
        <Input style={{
                border: "1px solid grey"
            }}
            disabled={disabled}
            onChange={(e) => {
                onSelectionChange(Number(e.currentTarget.value)) 
            }}
            type="select"
            value={selection}
        >
            <option key={-1} value={-1}>Select an Option</option>
            {/* loop through the array of options and generate a new option for each one */}
            {options.map((option, index) => {
                return (
                    <option key={index} value={index}> 
                        {option.description}&nbsp;&nbsp;&nbsp;&nbsp;{`${formatUSD(option.price)}`}
                    </option>
                );
            })}
        </Input>
    </FormGroup>
}