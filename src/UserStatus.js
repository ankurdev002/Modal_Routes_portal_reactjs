import React from "react";
import { Link } from "react-router-dom";

const UserStatus = () => {
  return (
    <div className="nav">
      <Link className="navlist" to="active">
        Active
      </Link>
      <Link className="navlist" to="inactive">
        Inactive
      </Link>
    </div>
  );
};

export default UserStatus;
