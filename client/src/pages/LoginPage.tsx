import React from "react";
import useUserState from "../utils/useUserState";

export const LoginPage: React.FC = () => {
  const [user,, login] = useUserState();

  //   async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
  //     event.preventDefault();
  //     const strWindowFeatures =
  //       "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";
  //     window.open("/auth/google", "_blank", strWindowFeatures);
  //     setPathname("/");
  //   }

  async function testClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!user) {
      login();
    }
  }

  return <div>
    <h3>Login to your account</h3>
    <form id="login-form">
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
          readOnly
        ></input>
      </div>
      <div className="form-group">
        <input
          type="password"
          id="disabledTextInput"
          className="form-control"
          placeholder="password *"
          readOnly
        ></input>
      </div>
      <button>Login</button>
    </form>
  </div>;
}
