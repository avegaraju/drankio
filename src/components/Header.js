import { useState, useRef, useEffect } from "react";
import SearchBox from "./search/SearchBox";

function Header() {
  const [showSearchBox, setShowSearchBox] = useState(false);

  return (
    <header className="header">
      <nav className="navbar">
        {showSearchBox === true ? (
          <SearchBox setShowSearchBox={setShowSearchBox} />
        ) : null}
        <div className="container-fluid">
          <div className="navbar-holder d-flex align-items-center justify-content-between">
            {/* <!-- Navbar Header--> */}
            <div className="navbar-header">
              {/* <!-- Navbar Brand --> */}
              <a
                href="index.html"
                className="navbar-brand d-none d-sm-inline-block"
              >
                <div className="brand-text d-none d-lg-inline-block">
                  <span>Drank </span>
                  <strong>IO</strong>
                </div>
                <div className="brand-text d-none d-sm-inline-block d-lg-none">
                  <strong>DIO</strong>
                </div>
              </a>
            </div>
            {/* <!-- Navbar Menu --> */}
            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
              {/* <!-- Search--> */}
              <li className="nav-item d-flex align-items-center">
                <a id="search" href="#">
                  <i
                    className="icon-search"
                    onClick={() => {
                      setShowSearchBox(true);
                    }}
                  ></i>
                </a>
              </li>
              {/* <!-- Register    --> */}
              <li className="nav-item">
                <a href="register.html" className="nav-link register">
                  {" "}
                  <span className="d-none d-sm-inline">Register</span>
                  <i className="fa fa-register"></i>
                </a>
              </li>
              {/* <!-- Logout    --> */}
              <li className="nav-item">
                <a href="login.html" className="nav-link logout">
                  {" "}
                  <span className="d-none d-sm-inline">Log In</span>
                  <i className="fa fa-sign-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
