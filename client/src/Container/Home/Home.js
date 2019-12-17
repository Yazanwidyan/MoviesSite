import React from "react";
import "./Home.css";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="main-body-div">
        <Header></Header>


          <div className="pix">
            <img className="picShawshank" src= "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg"/>
            <img className="picIntersteller" src="https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg"/>
             <img className="picGodfather" src="https://cdn-static.egybest.net/serve/movies/art-0780268216-x300.jpg"/>

          </div>
         
         <div className= "movies">
            <ul>
              <li><a>shawshank</a></li>
              <li><a>Intersteller</a></li>
              <li><a>Godfather</a></li>
            </ul>
          </div>

          <div>
            <p className="para1">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then

            </p>
          </div>
          <Footer></Footer>

        </div>
      </div>
    );
  }
}
export default Home;
