import React, { useState } from "react";
import { ReactComponent as UserLogo } from "../../icons/user.svg";
import { ReactComponent as UserExpand } from "../../icons/expand_more.svg";
import { ReactComponent as UserShrink } from "../../icons/expand_less.svg";

import UserData from "../../data/users.json";
import "./UsersList.css";

function UsersList() {
  const [activeUser, setactiveUser] = useState(null);

  const handleExpand = (id) => {
    setactiveUser(id);
  };

  const handleShrink = () => {
    setactiveUser(null);
  };

  const getDate = (date) => {
    let newDate = new Date(date);
    let month = newDate.getUTCMonth() + 1;
    let day = newDate.getDate().toString();
    let year = newDate.getFullYear().toString().slice(2);
    let hour = newDate.getUTCHours();
    let minutes = newDate.getUTCMinutes();
    let abbr = "AM";

    if (minutes < 10) minutes = `0${minutes.toString()}`;
    if (hour > 12) {
      hour = hour - 12;
      abbr = "PM";
    }
    return `${month}/${day}/${year} ${hour}:${minutes} ${abbr}`;
  };

  return (
    <div className="users_container">
      {UserData.map((user) => (
        <div key={user.id} className="user_card">
          <div className="user_card_shown">
            <div className="user_card_left">
              <UserLogo
                className="svg_user"
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
            {activeUser !== user.id && (
              <UserExpand
                onClick={() => handleExpand(user.id)}
                className="svg_symbols"
              />
            )}
            {activeUser === user.id && (
              <UserShrink
                onClick={() => handleShrink(user.id)}
                className="svg_symbols"
              />
            )}
          </div>
          <div
            className={`user_card_hidden ${
              activeUser === user.id ? "expanded" : ""
            }`}
          >
            <div className="detail_header">Address</div>
            <div className="detail_item">{`${user.street}, ${user.city}, ${user.state} ${user.zip}`}</div>
            <div className="detail_header">Phone</div>
            <div className="detail_item">{`(${user.phone.slice(
              0,
              3
            )}) ${user.phone.slice(3, 6)}-${user.phone.slice(6)}`}</div>
            <div className="detail_header">Created At</div>
            <div className="detail_item">{getDate(user.createdAt)}</div>
            <div className="detail_header">Last Logged In</div>
            <div className="detail_item">{getDate(user.lastLoggedIn)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
