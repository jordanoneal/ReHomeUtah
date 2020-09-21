import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";
import API from "../utils/API";
// import useUserState from "../utils/useUserState";

export default function Signup() {
  // const { user, signup } = useUserState();
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password1 !== password2) {
      alert("Passwords do not match");
      return;
    }

    if (!email || !password1 || !password2) {
      alert("Please validate all fields");
      return;
    }

    API.signup(email, password1).then((res) => console.log(res.data));
  };

  return (
    <div>
      <h4>Sign Up</h4>
      <Form onSubmit={submitForm}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password1"
            onChange={(event) => setPassword1(event.target.value)}
            value={password1}
            className="form-control"
          ></input>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="password2"
            onChange={(event) => setPassword2(event.target.value)}
            value={password2}
            className="form-control"
          ></input>
        </div>
        <button className="btn" type="submit">
          Register
        </button>

        <Link to="/login" className="ml-2">
          Login
        </Link>
      </Form>
    </div>
  );
}
