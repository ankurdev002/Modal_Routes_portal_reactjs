import React, { useContext } from "react";
import Navigation from "./Navigation";
import { ContextData } from "./ContextData/Context";
import { Link, Outlet } from "react-router-dom";
import UserStatus from "./UserStatus";
import { RiRadioButtonLine } from "react-icons/ri";

const UserList = () => {
  const UserData = useContext(ContextData);
  return (
    <>
      <Navigation />
      <div className="user-list-page">
        <ol className="alternating-colors">
          {UserData.state.map((item, index) => {
            return (
              <Link key={index} to={`/user_list_data/${item.id}`}>
                <li>
                  <h4>
                    <strong>Username:</strong> {item.username}
                    <sup>
                      {item.status ? (
                        <RiRadioButtonLine className="icons" />
                      ) : (
                        <RiRadioButtonLine className="icons-red" />
                      )}
                    </sup>
                  </h4>
                </li>
              </Link>
            );
          })}
        </ol>
      </div>
      <div>
        <UserStatus />
        <Outlet />
      </div>
    </>
  );
};

export default UserList;
