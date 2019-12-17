import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-main-div">

        <div className="footer-social-icons">
          <ul>
            <li><a href="#" target="blank"><i className="fa fa-facebook"> </i></a></li>
            <li><a href="#" target="blank"><i classname="fa fa-twitter"> </i></a></li>
            <li><a href="#" target="blank"><i className="fa fa-google"> </i></a></li>
            <li><a href="#" target="blank"><i className="fa fa-youtube"> </i></a></li>
          </ul> 
        </div>

        
        <div className="footer-menu-one">
          <ul>
            <li><a href="#"> home </a></li>
            <li><a href="#"> about us </a></li>
            <li><a href="#"> services </a></li>
            <li><a href="#"> products </a></li>
            <li><a href="#"> Contact us </a></li>
          </ul>
        </div>




        <div className="footer-menu-two">
          <ul>
            <li><a href="#"> blog </a></li>
            <li><a href="#"> news </a></li>
            <li><a href="#"> Gallery </a></li>
            <li><a href="#"> Media </a></li>
          </ul>
        </div>


      </div>
    );
  }
}

export default Footer;
