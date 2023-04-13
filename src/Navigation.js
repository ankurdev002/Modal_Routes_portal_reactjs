import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <Link className="navlist" to="/">
        Home
      </Link>
      <Link className="navlist" to="/user_list">
        User List
      </Link>
    </div>
  );
};

export default Navigation;
