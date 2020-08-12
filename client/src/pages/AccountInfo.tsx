import React, { useState, useEffect } from "react";
import axios from "axios";
import { userState, User } from "../recoil/userAtom";
import { useRecoilState } from "recoil";
import API from "../utils/API";
import useUserState from "../utils/useUserState";

function AccountInfo() {
  const [user, postUser] = useUserState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [refferer, setRefferer] = useState("");
  const [city, setCity] = useState("");

  // useEffect(() => console.log(user), [user]);

  useEffect(()=> {
    if(user) {
      setFirstName(user.firstName || "")
      setLastName(user.lastName || "")
      setAddress(user.address || "")
      setZipCode(user.zipCode || "")
      setRefferer(user.referrer || "")
      setCity(user.city || "")
    }
  }, [user])

  const submitAccountInfo = (event: any) => {
    event.preventDefault();
    postUser(new User({
      _id: user!._id,
      firstName: firstName,
      email: user!.email,
      lastName: lastName,
      address: address,
      zipCode: zipCode,
      referrer: refferer,
      city: city

    }))
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
          onChange={({ target: { value } }) =>
            setFirstName(value)
          }
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
          onChange={({ target: { value } }) =>
            setLastName(value)
          }
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
          onChange={({ target: { value } }) =>
            setAddress(value)
          }
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
          onChange={({ target: { value } }) =>
            setCity(value)
          }
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
          onChange={({ target: { value } }) =>
            setZipCode(value)
          }
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

      <div className="form-group">
        <label htmlFor="formGroupExmapleInput">
          Were you referred by a past client?
        </label>

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
      </div>
      <button className="btn btn-sucess" type="submit">
        Submit info
      </button>
    </form>
  );
}

export default AccountInfo;
