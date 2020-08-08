import React from "react";

function AccountInfo() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="first name"
          name="firstName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="last name"
          name="lastName"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Street Address</label>
        <input
          type="text"
          className="form-control"
          placeholder="street address"
          name="streetAddress"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">City</label>
        <input
          type="text"
          className="form-control"
          placeholder="city"
          name="city"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">zip code</label>
        <input
          type="text"
          className="form-control"
          placeholder="zip code"
          name="zipCode"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="email"
          name="email"
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
    </form>
  );
}

export default AccountInfo;
