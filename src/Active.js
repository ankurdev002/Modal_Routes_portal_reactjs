import React, { useContext } from "react";
import { ContextData } from "./ContextData/Context";

const Active = () => {
  const ActiveUser = useContext(ContextData);
  return (
    <div className="background">
      {ActiveUser.state.map((item) => {
        return item.status && <h5 key={item.id}>{item.username}</h5>;
      })}
    </div>
  );
};

export default Active;
