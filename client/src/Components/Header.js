import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div class="main-div">
        <nav>
            <a class="active">Home</a>
            <a>news</a>
            <a>Blog</a>
            <a>Gallery</a>
            <a>About</a>
            <a>Contact</a>
            <div class="container">
                <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/> 
                <button type="submit">Login</button>
                </form>
            </div>

         </nav>
         <div className="nav2">
            <ul>
              <li><a> Top 3 movies this weekend </a></li>
            </ul>
        </div>

      </div>
      
    );
  }
}

export default Header;
