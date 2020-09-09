import React, { useState } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

export default function Signup() {
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
      <form onSubmit={submitForm}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password1"
            onChange={(event) => setPassword1(event.target.value)}
            value={password1}
          ></input>
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="password2"
            onChange={(event) => setPassword2(event.target.value)}
            value={password2}
          ></input>
        </div>
        <button className="btn" type="submit">
          Register
        </button>

        <Link to="/login">Login</Link>
      </form>
    </div>
  );
}
