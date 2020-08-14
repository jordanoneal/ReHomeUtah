// import React from 'react';
import React, { useState } from 'react';
import { Jumbotron, Container, ListGroup, ListGroupItem, Row, Col, Card, CardImg, CardText, CardBody, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, CustomInput, Tooltip } from 'reactstrap';




export const BuildYourPlan: React.FC = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  // const [dropdown, setDropdown] = React.useState<string>();
  // const [items, setItems] = React.useState<>([])

  return (
    <>
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Build Your Plan</h1>
            <p className="lead">Let's get started.</p>
          </Container>
        </Jumbotron>
      </div>
      <br></br>

      <Row>
        <Col xs="6">
          {/* <Container classname="themed-container"> */}
          <Container className="themed-container" fluid="sm">

            <ListGroup>
              {/* {items.map(service => <ListGroupItem>
                <CustomInput type="checkbox" checked={service.included} disabled={service.included}> 
                {service.name}
                </CustomInput>
              </ListGroupItem>)} */}

              <ListGroupItem id="TooltipExample"><CustomInput type="checkbox" check={false} > Professional Photos
              <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggleTooltip}>
        Hello world!
      </Tooltip></CustomInput></ListGroupItem>
              <ListGroupItem>Market Analysis</ListGroupItem>
              <ListGroupItem>Document Management</ListGroupItem>
              <ListGroupItem>Present/Interpret Offers</ListGroupItem>
              <ListGroupItem>Transaction Cordination</ListGroupItem>
              <ListGroupItem>On call support</ListGroupItem>
              <ListGroupItem>Lighted Yard Sign</ListGroupItem>
              <ListGroupItem>Open Houses</ListGroupItem>
            </ListGroup>
          </Container>
        </Col>

        <Col xs="6">
          <div>
            <Card>
              <CardImg top width="100%" src="./assets/images/sellingprice.jpeg" alt="Card image cap" />
              <CardBody>
                <CardText>Pre checked items are included in the 2% base selling price</CardText>
              </CardBody>
            </Card>
          </div>
        </Col>
      </Row>
      <br></br>

      <Container className="themed-container" fluid="md">
        <ListGroup horizontal>
          <ListGroupItem> Virtual Staging </ListGroupItem>
          <ListGroupItem> $40/Photo </ListGroupItem>
        </ListGroup>

        <ListGroup horizontal>
          <ListGroupItem> Virtual Tour </ListGroupItem>
          <ListGroupItem>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>Prices</DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Up to 2500 sq ft = $180</DropdownItem>
                <DropdownItem>2500-3900 Sq ft = $280</DropdownItem>
                <DropdownItem>4000-6400 sq ft = $380</DropdownItem>
                <DropdownItem>6500-8900 sq ft = $480</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ListGroupItem>
        </ListGroup>
      </Container>

    </>
  )
};

{/* <select value={dropdown} onChange={(event) => setDropdown(event.target.value)}>
                {items.map(item => <option key={item.id} value={item.name}>{item.name}</option>)}
              </select> */}
export default BuildYourPlan;