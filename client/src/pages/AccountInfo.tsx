import React, { useState, useEffect } from "react";
import axios from "axios";
import { userState, User } from "../recoil/userAtom";
import { useRecoilState } from "recoil";
import API from "../utils/API";
import useForceUserLogin from "../utils/useForceUserLogin";
import "../styles/AccountInfo.css";
import usePathState from "../utils/usePathState";
import { Redirect } from "react-router";

function AccountInfo() {
  // const pathname = usePathState();
  const [pathname, setPathname] = React.useState<string>();
  const [user, postUser] = useForceUserLogin();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [refferer, setRefferer] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // useEffect(() => console.log(user), [user]);

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || "");
      setLastName(user.lastName || "");
      setAddress(user.address || "");
      setZipCode(user.zipCode || "");
      setRefferer(user.referrer || "");
      setCity(user.city || "");
      setPhoneNumber(user.phoneNumber || "");
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
        phoneNumber: phoneNumber,
      })
    );
    setPathname("/sellersdetails")
  };

  return pathname ? (<Redirect to ={pathname} />) :(
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
        <label htmlFor="formGroupExampleInput">Zip Code</label>
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
        <label htmlFor="formGroupExampleInput">Phone Number</label>
        <input
          type="tel"
          className="form-control"
          placeholder="202-555-0193"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          name="phone"
          onChange={({ target: { value } }) => setPhoneNumber(value)}
          value={phoneNumber}
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

      <div className="form-group">
        <label htmlFor="formGroupExmapleInput">
          Were you referred by a past client?
        </label>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          ></input>
          <label className="form-check-label">Yes</label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          ></input>
          <label className="form-check-label">No</label>
        </div>
      </div>
      <button className="btn" type="submit">
        Submit
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
