import { Link } from "react-router-dom";
import InfoPanel from "./InfoPanel";

function Login() {
  return (
    // <div>
    //   <GoogleLogin
    //     onSuccess={handleSuccess}
    //     onError={handleError}
    //     theme="filled_blue"
    //     size="large"
    //     text="continue_with"
    //   />
    // </div>
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
                    className="login-form py-5 w-100"
                    method="get"
                    action="index.html"
                  >
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="input-material-group mb-3">
                      <input
                        className="input-material"
                        id="login-username"
                        type="text"
                        name="loginUsername"
                        autocomplete="off"
                        required
                        placeholder="User Name"
                        data-validate-field="loginUsername"
                      />
                    </div>
                    <div className="input-material-group mb-4">
                      <input
                        className="input-material"
                        id="login-password"
                        type="password"
                        name="loginPassword"
                        required
                        placeholder="Password"
                        data-validate-field="loginPassword"
                      />
                    </div>
                    <button
                      className="btn btn-primary mb-3"
                      id="login"
                      type="submit"
                    >
                      Login
                    </button>
                    <br />
                    <a className="text-sm text-paleBlue" href="#">
                      Forgot Password?
                    </a>
                    <br />
                    <small className="text-gray-500">
                      Do not have an account?{" "}
                    </small>
                    <Link to={"/register"}>
                      <span className="text-sm text-paleBlue">Signup</span>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
          {/* <!-- Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)--> */}
        </p>
      </div>
    </div>
  );
}
export default Login;
