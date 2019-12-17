import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="mainHead">
        <button >Log in</button>


        </div>
        
        <div className="nav">
            <ul>
              <li><a> blog </a></li>
              <li><a> news </a></li>
              <li><a> Gallery </a></li>
              <li><a> Media </a></li>
            </ul>
        </div>

      </div>
      
    );
  }
}

export default Header;
