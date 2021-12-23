import React, { useState, useContext } from "react";
import { UserProvider } from "./model";
import UserForm from "./UserForm";
import UserTable from "./UsersTable";

export default function Users() {
  return (
    <>
      <UserProvider>
        <UserTable />
      </UserProvider>
    </>
  );
}
