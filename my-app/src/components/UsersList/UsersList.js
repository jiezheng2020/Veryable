import React, { useState } from "react";
import { ReactComponent as UserLogo } from "../../icons/user.svg";
import UserData from "../../data/users.json";
import "./UsersList.css";

function UsersList() {
  return (
    <div className="users_container">
      {UserData.map((user) => (
        <div className="user_card">
          {console.log(user)}
          <UserLogo
            fill={`
            ${user.role === "Administrator" ? "#2081C3" : ""}
            ${user.role === "User" ? "#68AAAB" : ""}
            ${user.role === "Viewer" ? "#7E7E7E" : ""}`}
          />
          <div className="user_info">
            <div className="user_name">
              {user.firstName} {user.lastName}
            </div>
            <div className="user_role">{user.role}</div>
            <div className="user_email">{user.email}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
