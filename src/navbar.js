import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <a id="logo" href="#">
              Measure
            </a>

            <ul>
              <li>
                <a href="#">
                  <b>About</b>
                </a>
              </li>

              <li>
                {" "}
                <a href="#">n
                  <b>Services</b>
                </a>{" "}
              </li>

              <li>
                {" "}
                <a href="#">
                  <b>Login</b>
                </a>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
