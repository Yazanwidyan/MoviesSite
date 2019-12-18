import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text"><span>We</span>Movies</h1>
            <p>
            A film, also called a movie or motion picture, is a series of still images on a strip of plastic which,
            when run through a projector and shown on a screen,
            creates the illusion of moving images. A film is created by photographing actual scenes with a motion picture camera;
            by photographing drawings or miniature 
            models using traditional animation techniques; by means of CGI
            </p>
            <div className="contact">
              <span><i class="fas fa-phone"></i> &nbsp; 08-88-555-44 </span>
              <span><i class="fas fa-envelope"></i> &nbsp; info@yazanwidyan.com </span>
            </div>
            <div className="socials">
              <a><i className="fab fa-facebook"></i></a>
              <a><i className="fab fa-instagram"></i></a>
              <a><i className="fab fa-twitter"></i></a>
              <a><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <br/>
            <ul>
              <a><li>Events</li></a>
              <a><li>Team</li></a>
              <a><li>Mentores</li></a>
              <a><li>Gallery</li></a>
              <a><li>Terms</li></a>
            </ul>
          </div>

          <div className="footer-section contact">
            <h2>Contact us</h2>
            <br/>
            <form action="index.html" method="post">
              <input type="email" name="email" className="address" placeholder="You email address..."/>
              <textarea name="message" className="message" placeholder="Your message..."></textarea>
              <button type="submit" className="btn">
                send
                </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; Yazan Widyan
        </div>

      </div>
    );
  }
}

export default Footer;
