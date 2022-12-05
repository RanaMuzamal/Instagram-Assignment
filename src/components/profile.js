import React from "react";
import { FaChevronCircleLeft, FaCheckCircle } from "react-icons/fa";
import "./profile.css";
const Profile = () => {
  return (
    <div>
      <div className="page-profile">
        <FaChevronCircleLeft size="25px" className="fav" />
        <h4>cristianoronaldo.ftb</h4>
        <FaCheckCircle className="icon" />
      </div>
      <div className="main">
        <img
          className="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7yBQKd_Ko3WCV0c0hHGoVfRrD_pEowBI3w&usqp=CAU"
        />
        <ul>
          <li>
            <b>13.7 K</b>
          </li>
          <li>
            <b>2.2 M</b>
          </li>
          <li>
            <b>2</b>
          </li>
          <br></br>
          <li>Post</li>
          <li>Followers</li>
          <li>Following</li>
        </ul>
      </div>
      <div className="text">
        <div className="text1">
          <h3>
            <strong>Cristiano Ronaldo</strong>
          </h3>
          <h3>Footballer</h3>
          <p>
            What is special about Ronaldo? Cristiano Ronaldo has scored 807
            career goals, making him the highest ever goalscorer in the history
            of men's soccer.
          </p>
        </div>
      </div>
      <div className="post">
        <video>
          <source src=""></source>
        </video>
      </div>
    </div>
  );
};
export default Profile;
