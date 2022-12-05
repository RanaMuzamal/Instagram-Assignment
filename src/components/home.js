import React from "react";
import { FaThumbsUp, FaThumbsDown, FaComment } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <div className="app-header">
      <div className="top-img">
        <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
        <hr></hr>
        <div className="top-profile">
          <img
            className="image"
            src="https://c4.wallpaperflare.com/wallpaper/179/427/668/cristiano-ronaldo-4k-hd-pc-download-wallpaper-preview.jpg"
          />
          <h3>
            <em>
              <strong>CRISTIANO RONALDO</strong>
            </em>
          </h3>
          <p>
            Cristiano Ronaldo dos Santos Aveiro GOIH ComM is a Portuguese
            professional footballer who plays as a forward and captains the
            Portugal national team.
          </p>
        </div>
        <div className="file2"></div>
        <div>
          <img
            className="pic"
            src="https://cristianoronaldotabs.com/wp-content/uploads/2020/08/CR7-Career.jpg"
          />
          <div className="comm">
            <FaThumbsUp size="5%" />
            <FaComment size="5%" />
            <hr></hr>
          </div>
          <div className="desc">
            <p>
              Cristiano Ronaldo's highlights and achievements. View Highlights.
              Your browser does not support the video tag. CR7 Eyewear. A
              contemporary collection able
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
