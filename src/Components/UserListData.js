import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextData } from "../ContextData/Context";

const UserListData = () => {
  const SingleUser = useContext(ContextData);
  const params = useParams();

  const filtered = SingleUser.state.find((obj) => {
    return obj.id === Number(params.id);
  });

  return (
    <div className="main-data">
      <Link to="/user_list">
        <button style={{ "--clr": "#006dff" }}>
          <span>Back</span>
          <i></i>
        </button>
      </Link>
      <div>
        <div className="card">
          <div className="desc">
            <h6 className="secondary-text">Name: {filtered.name}</h6>
            <h6 className="secondary-text">Username: {filtered.username}</h6>
          </div>
          <div className="details">
            <h3>Detailed Data</h3>
            <div className="rating">
              <h6 className="secondary-text"> SEX: {filtered.sex} </h6>
              <h6 className="secondary-text">DOB: {filtered.birthday}</h6>
            </div>
            <div className="activity">
              <h6 className="secondary-text">Add: {filtered.address}</h6>
              <h6 className="secondary-text">Email: {filtered.email}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListData;
