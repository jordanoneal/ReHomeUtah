import React, { useState } from "react";
import useUserState from "../utils/useUserState";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";

export const LoginPage: React.FC = () => {
  const { user, logIn, googleLogin } = useUserState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleGoogleLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!user) {
      googleLogin();
    }
  }

  const localLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    logIn(email, password)
  }


  return (
    <div>
      <h4>Login to your account</h4>
      <Form id="login-form" onSubmit={localLogin}>
        <div className="form-group">
          <button className="btn btn-outline-dark" onClick={handleGoogleLogin}>
            <img
              width="20px"
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            Login with Google
          </button>
        </div>
        <div className="form-group">
          <label>OR</label>

          <input
            type="text"
            id="disabledTextInput"
            className="form-control"
            placeholder="email address *"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="disabledTextInput"
            className="form-control"
            placeholder="password *"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          ></input>
        </div>
        <button type="submit" className="btn">Login</button>
      </Form>

      <div>
        Dont have an account?
        <Link to="/Signup" className="ml-2">
          Sign up
        </Link>
      </div>
    </div>
  );
};
