import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IServicesModel } from "../../../models/services";
import { Service } from "../components/Service";
import API from "../utils/API";
import PlanJumbotron from "../components/PlanJumbotron";
import {
    Container,
    Row,
    Col,
    ListGroup,
    Button,
} from "reactstrap";

export const BuildYourPlan = () => {
    const [services, setServices] = useState<IServicesModel[]>([]);

    // const [dropdownOpen, setDropdownOpen] = useState(false);
    // const toggle = () => {
    //     setDropdownOpen(prevState => !prevState);
    // }

    useEffect(() => {
        API.getServices().then((res) => {
            setServices(res.data)
        })
    }, []);

    return (
        <>
            <PlanJumbotron></PlanJumbotron>
            <br></br>
            <Row>
                <Col xs={12}>
                    {/* <Container classname=“themed-container”> */}
                    <Container className="themed-container" >
                        <ListGroup style={{ whiteSpace: "pre" }}>{services.map(service => <Service service={service} />)}
                        </ListGroup>
                    </Container>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <Link to="/accountinfo">
                        <Button color="primary"> Save and Continue </Button>
                    </Link>
                </Col>
            </Row>
        </>
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

// Jay's Build Your Plan Code
// ===================================
// import React, { useState } from “react”;
// import API from “../utils/API”;
// import {
//   Jumbotron,
//   Container,
//   ListGroup,
//   ListGroupItem,
//   Row,
//   Col,
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   Dropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   Button,
//   UncontrolledPopover,
//   PopoverHeader,
//   PopoverBody,
//   CustomInput
// } from “reactstrap”;
// export const BuildYourPlan: React.FC = (props) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const toggle = () => setDropdownOpen((prevState) => !prevState);
//   // const [tooltipOpen, setTooltipOpen] = useState(false);
//   // const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
//   // const [dropdown, setDropdown] = React.useState<string>();
//   // const [items, setItems] = React.useState<>([])
//   return (
//     <>
//       <div>
//         <Jumbotron fluid>
//           <Container fluid>
//             <h1 className=“display-3">Build Your Plan</h1>
//             <p className=“lead”>Let’s get started.</p>
//           </Container>
//         </Jumbotron>
//       </div>
//       <br></br>
//       <Row>
//         <Col xs=“6">
//           {/* <Container classname=“themed-container”> */}
//           <Container className=“themed-container” fluid=“sm”>
//             <ListGroup>
//               {/* {items.map(service => <ListGroupItem>
//                 <CustomInput type=“checkbox” checked={service.included} disabled={service.included}>
//                 {service.name}
//                 </CustomInput>
//               </ListGroupItem>)} */}
//               {/* <ListGroupItem id=“TooltipExample”><CustomInput type=“checkbox” check={false} > Professional Photos
//               <Tooltip placement=“right” isOpen={tooltipOpen} target=“TooltipExample” toggle={toggleTooltip}>
//                   Hello world!
//       </Tooltip></CustomInput></ListGroupItem> */}
//               <ListGroupItem>
//               <CustomInput type=“checkbox” id=“exampleCustomCheckbox” check={true} />
//                 <Button color=“white” id=“UncontrolledPopover” type=“button”>
//                   Market Analysis
//                 </Button>
//                 <UncontrolledPopover
//                   placement=“bottom”
//                   target=“UncontrolledPopover”
//                 >
//                   <PopoverHeader>Included In 2% Selling Price</PopoverHeader>
//                   <PopoverBody>
//                     Pricing your home correctly is crucial. No ifs, ands or
//                     buts. We do a full-market analysis around your property’s
//                     criteria to ensure your home is priced right.
//                   </PopoverBody>
//                 </UncontrolledPopover>
//               </ListGroupItem>
//               <ListGroupItem>
//               <CustomInput type=“checkbox” id=“exampleCustomCheckbox” disabled checked={true} />
//                 <Button
//                   color=“white”
//                   id=“UncontrolledPopoverDocumentManagement”
//                   type=“button”
//                 >
//                   Document Management
//                 </Button>
//                 <UncontrolledPopover
//                   placement=“bottom”
//                   target=“UncontrolledPopoverDocumentManagement”
//                 >
//                   <PopoverHeader>Included In 2% Selling Price</PopoverHeader>
//                   <PopoverBody>
//                     Nobody likes paperwork. We’ll take care of it for you.{” “}
//                   </PopoverBody>
//                 </UncontrolledPopover>
//               </ListGroupItem>
//               <ListGroupItem>
//               <CustomInput type=“checkbox” id=“exampleCustomCheckbox” disabled checked={true} />
//                 <Button color=“white” id=“UncontrolledPopoverPresentOffers” type=“button”>
//                   Present/Interpret Offers
//                 </Button>
//                 <UncontrolledPopover
//                   placement=“bottom”
//                   target=“UncontrolledPopoverPresentOffers”
//                 >
//                   <PopoverHeader>Included In 2% Selling Price</PopoverHeader>
//                   <PopoverBody>
//                     We’re in your corner, and will make you a savvy homeseller,
//                     giving you confidence during your negotiations
//                   </PopoverBody>
//                 </UncontrolledPopover>
//               </ListGroupItem>
//               <ListGroupItem>
//               <CustomInput type=“checkbox” id=“exampleCustomCheckbox” disabled checked={true} />
//                 <Button color=“white” id=“UncontrolledPopoverTransaction” type=“button”>
//                   Transaction Cordination
//                 </Button>
//                 <UncontrolledPopover
//                   placement=“bottom”
//                   target=“UncontrolledPopoverTransaction”
//                 >
//                   <PopoverHeader>Included In 2% Selling Price</PopoverHeader>
//                   <PopoverBody>
//                     There are a lot people involved in a Real Estate transaction
//                     (title representitives, lenders, inspectors, etc). We
//                     coordinate with them so you don’t have to.
//                   </PopoverBody>
//                 </UncontrolledPopover>
//               </ListGroupItem>
//               <ListGroupItem>
//               <CustomInput type=“checkbox” id=“exampleCustomCheckbox” disabled checked={true} />
//               <Button color=“white” id=“UncontrolledPopoverOnCallSupport” type=“button”>
//                     On call support
//                 </Button>
//                 <UncontrolledPopover
//                   placement=“bottom”
//                   target=“UncontrolledPopoverOnCallSupport”
//                 >
//                   <PopoverHeader>Included In 2% Selling Price</PopoverHeader>
//                   <PopoverBody>
//                   Call me, maybe?
//                   </PopoverBody>
//                 </UncontrolledPopover>
//               </ListGroupItem>
//               <ListGroupItem>
//               <CustomInput type=“checkbox” id=“exampleCustomCheckbox” disabled checked={true} />
//               <Button color=“white” id=“UncontrolledPopoverLighted” type=“button”>
//                   Lighted Yard Sign
//                 </Button>
//                 <UncontrolledPopover
//                   placement=“bottom”
//                   target=“UncontrolledPopoverLighted”
//                 >
//                   <PopoverHeader>Included In 2% Selling Price</PopoverHeader>
//                   <PopoverBody>
//                   Our yard signs have solar-powered lights that get the night crowd’s attention.
//                   </PopoverBody>
//                 </UncontrolledPopover>
//               </ListGroupItem>
//               <ListGroupItem>
//               <CustomInput type=“checkbox” id=“exampleCustomCheckbox” disabled checked={true} />
//               <Button color=“white” id=“UncontrolledPopoverOpenHouses” type=“button”>
//                   Open Houses
//                 </Button>
//                 <UncontrolledPopover
//                   placement=“bottom”
//                   target=“UncontrolledPopoverOpenHouses”
//                 >
//                   <PopoverHeader>Included In 2% Selling Price</PopoverHeader>
//                   <PopoverBody>
//                   We prepare days in advance for our massive open houses. They’re basically giant house parties — but you’re not invited... sorry.
//                   </PopoverBody>
//                 </UncontrolledPopover>
//               </ListGroupItem>
//             </ListGroup>
//           </Container>
//         </Col>
//         <Col xs=“6">
//           <div>
//             <Card>
//               <CardImg
//                 top
//                 width=“100%”
//                 src=“./assets/images/sellingprice.jpeg”
//                 alt=“Card image cap”
//               />
//               <CardBody>
//                 <CardText>
//                   Pre checked items are included in the 2% base selling price
//                 </CardText>
//               </CardBody>
//             </Card>
//           </div>
//         </Col>
//       </Row>
//       <br></br>
//       <Container className=“themed-container” fluid=“md”>
//         <ListGroup horizontal>
//           <ListGroupItem> Virtual Staging </ListGroupItem>
//           <ListGroupItem> $40/Photo </ListGroupItem>
//         </ListGroup>
//         <ListGroup horizontal>
//           <ListGroupItem> Virtual Tour </ListGroupItem>
//          <ListGroupItem>
//             <Dropdown isOpen={dropdownOpen} toggle={toggle}>
//               <DropdownToggle caret>Prices</DropdownToggle>
//               <DropdownMenu>
//                 <DropdownItem>Up to 2500 sq ft = $180</DropdownItem>
//                 <DropdownItem>2500-3900 Sq ft = $280</DropdownItem>
//                 <DropdownItem>4000-6400 sq ft = $380</DropdownItem>
//                 <DropdownItem>6500-8900 sq ft = $480</DropdownItem>
//               </DropdownMenu>
//             </Dropdown>
//           </ListGroupItem>
//         </ListGroup>
//       </Container>
//       <div>
//         <Button color=“primary”>Save</Button>{” “}
//       </div>
//     </>
//   );
// };
// {
//   /* <select value={dropdown} onChange={(event) => setDropdown(event.target.value)}>
//                 {items.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
//               </select> */
// }
// export default BuildYourPlan;