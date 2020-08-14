import React, { useState } from 'react';
import {
  Col, Row, Button, Form, FormGroup, Label, Input, Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';


export const AccountInfo: React.FC = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Presidio Real Estate</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
              </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                </DropdownItem>
                  <DropdownItem>
                    Option 2
                </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleFirstName">First Name</Label>
              <Input type="text" name="first name" id="exampleFirstName" placeholder="first name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleLastName">Last Name</Label>
              <Input type="text" name="first name" id="exampleLastName" placeholder="last name" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor" />
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input type="text" name="city" id="exampleCity" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input type="text" name="state" id="exampleState" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input type="text" name="zip" id="exampleZip" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="email" />
        </FormGroup>
        <FormGroup check>
          <Label for="exampleCheck" check>Were you referred by a past client?</Label>
        </FormGroup>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label for="exampleCheck" check>Yes</Label><br></br>
        <Input type="checkbox" name="check" id="exampleCheck" />
        <Label for="exampleCheck" check>No</Label><br></br>

        <Button>Sign in</Button>
      </Form>
    </>
  );
}

// function AccountInfo() {
//   return (
//     <form>
//       <div className="form-group">
//         <label htmlFor="formGroupExampleInput">First name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="first name"
//           name="firstName"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="formGroupExampleInput">Last name</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="last name"
//           name="lastName"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="formGroupExampleInput">Street Address</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="street address"
//           name="streetAddress"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="formGroupExampleInput">City</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="city"
//           name="city"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="formGroupExampleInput">zip code</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="zip code"
//           name="zipCode"
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="formGroupExampleInput">Email</label>
//         <input
//           type="text"
//           className="form-control"
//           placeholder="email"
//           name="email"
//         />
//       </div>

//       <div className="form-group">
//         <label htmlFor="formGroupExmapleInput">
//           Were you referred by a past client?
//         </label>

//         <input
//           className="form-check-input"
//           type="checkbox"
//           value=""
//           id="defaultCheck1"
//         ></input>
//         <label className="form-check-label" htmlFor="defaultCheck1">
//           Yes
//         </label>
//         <input
//           className="form-check-input"
//           type="checkbox"
//           value=""
//           id="defaultCheck2"
//         ></input>
//         <label className="form-check-label" htmlFor="defaultCheck2">
//           No
//         </label>
//       </div>
//     </form>
//   );
// }

export default AccountInfo;
