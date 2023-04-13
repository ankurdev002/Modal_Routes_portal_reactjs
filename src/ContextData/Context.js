import React, { createContext, useState } from "react";

export const ContextData = createContext();
const Context = (props) => {
  const data = [
    {
      id: 1,
      username: "JackSparrow",
      sex: "M",
      address: "NY, FPO AA 01128,USA",
      name: "Jack",
      status: true,
      email: "jack@gmail.com",
      birthday: "1985-10-27",
    },
    {
      id: 2,
      username: "William Lord",
      status: false,
      sex: "M",
      address: "SF NY, FPO AA 01128",
      name: "William",
      email: "will@gmail.com",
      birthday: "1949-01-07",
    },
    {
      id: 3,
      username: "Ana Williams",
      status: true,
      sex: "F",
      address: "Los Santos, FPO AA 01128",
      name: "Ana Mccarthy",
      email: "ana@gmail.com",
      birthday: "1969-05-16",
    },
    {
      id: 4,
      username: "williamball",
      status: false,
      sex: "F",
      address: "USCGC Collins, FPO AA 01128",
      name: "Pamela Mccarthy",
      email: "zmorgan@gmail.com",
      birthday: "1909-10-07",
    },
    {
      id: 5,
      username: "DarkLord",
      status: false,
      sex: "M",
      address: "NY Collins, FPO AA 01128",
      name: "Sam Watcher",
      email: "sam@gmail.com",
      birthday: "1989-03-19",
    },
  ];
  const [state, setState] = useState(data);
  const [obj, setObj] = useState();

  return (
    <ContextData.Provider
      value={{
        state,
        obj,
        dataSet: (value) => {
          setObj(value);
        },
        dataChange: (value) => {
          setState(value);
        },
      }}
    >
      {props.children}
    </ContextData.Provider>
  );
};

export default Context;
