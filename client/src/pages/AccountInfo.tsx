import React, { useState, useEffect } from "react";
import axios from "axios";
import { userState, User } from "../recoil/userAtom";
import { useRecoilState } from "recoil";
import API from "../utils/API";
import useUserState from "../utils/useUserState";
import { Form, Row, Col, FormGroup, Label, Input } from "reactstrap";

function AccountInfo() {
  const [user, postUser] = useUserState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [refferer, setRefferer] = useState("");
  const [city, setCity] = useState("");

  // useEffect(() => console.log(user), [user]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAddress(user.address || "");
      setZipCode(user.zipCode || "");
      setRefferer(user.referrer || "");
      setCity(user.city || "");
    }
  }, [user]);

  const submitAccountInfo = (event: any) => {
    event.preventDefault();
    postUser(
      new User({
        _id: user!._id,
        firstName: firstName,
        email: user!.email,
        lastName: lastName,
        address: address,
        zipCode: zipCode,
        referrer: refferer,
        city: city,
      })
    );
  };

  return (
    <form onSubmit={submitAccountInfo}>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="first name"
          name="firstName"
          onChange={({ target: { value } }) => setFirstName(value)}
          value={firstName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="last name"
          name="lastName"
          onChange={({ target: { value } }) => setLastName(value)}
          value={lastName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Street Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="street address"
          name="streetAddress"
          onChange={({ target: { value } }) => setAddress(value)}
          value={address}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">City</label>
        <input
          type="text"
          className="form-control"
          placeholder="city"
          name="city"
          onChange={({ target: { value } }) => setCity(value)}
          value={city}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">zip code</label>
        <input
          type="text"
          className="form-control"
          placeholder="zip code"
          name="zipCode"
          onChange={({ target: { value } }) => setZipCode(value)}
          value={zipCode}
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="email"
          name="email"
          readOnly
          value={user ? user.email : ""}
        />
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

        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        ></input>
        <label className="form-check-label" htmlFor="defaultCheck1">
          Yes
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck2"
        ></input>
        <label className="form-check-label" htmlFor="defaultCheck2">
          No
        </label>
        </Form>
      
       <button className="btn btn-sucess" type="submit">
        Submit info
       </button>
      </form>
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
