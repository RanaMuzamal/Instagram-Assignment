import React from "react";
import { FcCheckmark } from "react-icons/fc";
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
//import "./coments.css";

// import Avatar from "@material-ui/core/Avatar";

function Coment({ username, shotdisc }) {
  return (
    <div className="comment">
      <div className="comment__header">
        {/* Header: avatar with username */}
        <Avatar
          className="comment__avatar"
          alt={username}
          src="./images/ava.jpg"
        />
        <h6>{username}</h6> <FcCheckmark /> {shotdisc}
      </div>
    </div>
  );
}

export default Coment;
