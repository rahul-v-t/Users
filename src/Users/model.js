import React, { createContext, useState, useEffect } from "react";
import userData from "./UserData";

export const UserState = createContext();

export const UserProvider = (props) => {
  const [data, setData] = useState([]);
  const [type, setType] = useState("Admin");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      // alert("Incremented !");
    }
  }, [data]);

  function getAllUsers() {
    const d = userData;
    setData(d);
  }

  return (
    <UserState.Provider
      value={{
        visible,
        setVisible,
        data,
        setData,
        getAllUsers,
        type,
        setType,
      }}
    >
      {props.children}
    </UserState.Provider>
  );
};
