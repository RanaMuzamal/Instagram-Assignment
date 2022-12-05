//import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Switch } from "antd";
import Home from "./components/home";
import Profile from "./components/profile";
import Comment from "./components/comments";
import Coment from "./components/coment";
function App() {
  return (
    <section className="App">
      <Router>
        {/* <Switch />
          <Link to="/">Profile</Link> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="comments" element={<Comment />} />
          <Route path="comment" element={<Coment />} />
        </Routes>
      </Router>
    </section>
  );
}

export default App;
