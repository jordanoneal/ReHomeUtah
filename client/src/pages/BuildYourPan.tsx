import React from "react";
import { Link } from "react-router-dom";
import { IncludedService } from "../components/IncludedService";
// import { OptionsService } from "../components/OptionsService";
import { FlatService } from "../components/FlatService";
// import { IncrementalService } from "../components/IncrementalService";
import { IServicesModel } from "../../../models/services";
import { useState } from "react";
import { useEffect } from "react";
import API from "../utils/API";
import { Service } from "../components/Service";

export const BuildYourPlan = () => {
    const [ services, setServices ] = useState<IServicesModel[]>([]);
    const [ dropdownOpen, setDropdownOpen ] = useState(false);
    const toggle = () => {
        setDropdownOpen(prevState => !prevState);
    }
    const [ tooltipOpen, setTooltipOpen ] = useState(false);

    const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

    useEffect(() => { 
        API.getServices().then((res) => {
            setServices(res.data)
        })
    }, []);

    return (
        <div style={{ whiteSpace: "pre"}}>
            {services.map( service => <Service service = {service}/>)}
        </div>
    )
}

// pricingOptions.Options? pricingOptions.Options.map( data => {
//     // <OptionPricing { ...data } />
//   }): 
// data.services[].pricing.Included? pricing.Included.map( services => {
//     <IncludedService></IncludedService>
//   })
//   : pricingOptions.Flat? pricingOptions.Flat.map( data => {

//   }): pricingOptions.Incremental? pricingOptions.Incremental.map( data => {

//   }): 