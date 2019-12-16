import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div class="footer-main-div">
        <div class="footer-social-icons">
          <ul>
            <li>
              {" "}
              <a href="#" target="blank">
                {" "}
                <i class="fa fa-facebook"> </i>
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#" target="blank">
                {" "}
                <i class="fa fa-twitter"> </i>
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#" target="blank">
                {" "}
                <i class="fa fa-google"> </i>
              </a>{" "}
            </li>{" "}
            <li>
              {" "}
              <a href="#" target="blank">
                {" "}
                <i class="fa fa-youtube"> </i>
              </a>{" "}
            </li>{" "}
          </ul>{" "}
        </div>{" "}
        <div class="footer-menu-one">
          <ul>
            <li>
              {" "}
              <a href="#"> home </a>
            </li>
            <li>
              {" "}
              <a href="#"> about us </a>
            </li>
            <li>
              {" "}
              <a href="#"> services </a>
            </li>
            <li>
              {" "}
              <a href="#"> products </a>
            </li>
            <li>
              {" "}
              <a href="#"> Contact us </a>
            </li>
          </ul>
        </div>{" "}
        <div class="footer-menu-two">
          <ul>
            <li>
              {" "}
              <a href="#"> blog </a>
            </li>
            <li>
              {" "}
              <a href="#"> news </a>
            </li>
            <li>
              {" "}
              <a href="#"> Gallery </a>
            </li>
            <li>
              {" "}
              <a href="#"> Media </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
