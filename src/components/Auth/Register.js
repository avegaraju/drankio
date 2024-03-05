import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import InfoPanel from "./InfoPanel";
import GoogleLoginButton from "./GoogleLoginButton";

function Register() {
  return (
    <div className="login-page">
      <div className="container d-flex align-items-center position-relative py-5">
        <div className="card shadow-sm w-100 rounded overflow-hidden bg-none">
          <div className="card-body p-0">
            <div className="row gx-0 align-items-stretch">
              {/* <!-- Logo & Information Panel--> */}
              <InfoPanel />
              {/* <!-- Form Panel    --> */}
              <div className="col-lg-6 bg-white">
                <div className="d-flex align-items-center px-4 px-lg-5 h-100">
                  <form
                    className="register-form py-5 w-100"
                    method="get"
                    action="login.html"
                  >
                    <GoogleLoginButton />
                    <div className="input-material-group mb-3">
                      <p>
                        <span>
                          {"       "} or {"       "}
                        </span>
                      </p>
                      <input
                        className="input-material"
                        type="text"
                        name="registerUsername"
                        required
                        placeholder="User Name"
                        data-validate-field="registerUsername"
                      />
                    </div>
                    <div className="input-material-group mb-3">
                      <input
                        className="input-material"
                        type="email"
                        name="registerEmail"
                        required
                        placeholder="Email Address"
                        data-validate-field="registerEmail"
                      />
                    </div>
                    <div className="input-material-group mb-4">
                      <input
                        className="input-material"
                        type="password"
                        name="registerPassword"
                        required
                        placeholder="Password"
                        data-validate-field="registerPassword"
                      />
                    </div>
                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        id="register-agree"
                        name="registerAgree"
                        type="checkbox"
                        required
                        value="1"
                        data-validate-field="registerAgree"
                      />
                      <label
                        className="form-check-label form-label"
                        htmlFor="register-agree"
                      >
                        I agree with the terms and policy{" "}
                      </label>
                    </div>
                    <button
                      className="btn btn-primary mb-3"
                      id="login"
                      type="submit"
                    >
                      Register
                    </button>
                    <br />
                    <small className="text-gray-500">
                      Already have an account?{" "}
                    </small>
                    <Link to={"/login"}>
                      <span className="text-sm text-paleBlue">Login</span>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center position-absolute bottom-0 start-0 w-100 z-index-20">
        <p className="text-white">
          Design by{" "}
          <a
            className="external"
            href="https://bootstrapious.com/p/admin-template"
          >
            Bootstrapious
          </a>
          {/* <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you htmlFor understanding :)--> */}
        </p>
      </div>
    </div>
  );
}

export default Register;
