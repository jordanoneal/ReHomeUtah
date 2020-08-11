import React, { useState, useEffect } from "react";
import axios from "axios";
import { userState, User } from "../recoil/userAtom";
import { useRecoilState } from "recoil";
import API from "../utils/API";

function AccountInfo() {
  // const [user, setUser] = useRecoilState(userState);
  // useEffect(() => console.log(user), [user]);

  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const { data } = await API.getUser();
    setUser(new User(data));
  };

  useEffect(() => console.log(user), [user]);

  const submitAccountInfo = (event: any) => {
    event.preventDefault();
    axios({
      method: "POST",
      data: user,
      url: "/api/saveuser",
    })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
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
            setUser((prevState) => new User({ ...prevState, firstName: value }))
          }
          value={user.firstName}
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
            setUser((prevState) => new User({ ...prevState, lastName: value }))
          }
          value={user.lastName}
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
            setUser((prevState) => new User({ ...prevState, address: value }))
          }
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
            setUser((prevState) => new User({ ...prevState, city: value }))
          }
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
            setUser((prevState) => new User({ ...prevState, zipCode: value }))
          }
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
          onChange={({ target: { value } }) =>
            setUser((prevState) => new User({ ...prevState, email: value }))
          }
          value={user.email}
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
