import React from "react";
import "./NavBar.css";
import { ReactComponent as GroupsIcon } from "../../icons/group.svg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_content">
        <GroupsIcon fill="#2081C3" />
        <span>USERS</span>
      </div>
    </div>
  );
}

export default NavBar;
