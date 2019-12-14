import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="sides">
            <a href="#" className="logo">
              BLOG
            </a>
          </div>
          <div className="sides">
            {" "}
            <a href="#" className="menu">
              {" "}
            </a>
          </div>
          <div className="info">
            <h4>
              <a href="#category">UI DESIGN</a>
            </h4>
            <h1>KEN BURNS HEADERS ARE THE BEST</h1>
            <div className="meta">
              <a
                href="https://twitter.com/nodws"
                target="_b"
                className="author"
              ></a>
              <br></br>
              By{" "}
              <a href="https://twitter.com/nodws" target="_b">
                James Nodws
              </a>{" "}
              on May 30, 2019
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
