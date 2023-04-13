import React from "react";
import Navigation from "./Navigation";
import { Link, Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <h2>HomePage</h2>
      <div className="modal-main">
        <Link to="modal" className="modal-button">
          Display Modal
        </Link>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
