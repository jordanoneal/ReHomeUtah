import React from "react";
import useUserState from "../utils/useUserState";
import { Link } from "react-router-dom";
import { Form } from "../components/Form";

export const LoginPage: React.FC = () => {
  const { user, googleLogin } = useUserState();

  async function testClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!user) {
      googleLogin();
    }
  }

  return (
    <div>
      <h4>Login to your account</h4>
      <Form id="login-form">
        <div className="form-group">
          <button className="btn btn-outline-dark" onClick={testClick}>
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
          ></input>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="disabledTextInput"
            className="form-control"
            placeholder="password *"
          ></input>
        </div>
        <button className="btn">Login</button>
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
