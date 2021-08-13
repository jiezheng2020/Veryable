import React, { useState } from "react";
import "./NavBar.css";
import GroupsIcon from "../../icons/group.svg";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar_content">
        <img src={GroupsIcon}></img>
        <span>USERS</span>
      </div>
    </div>
  );
}

export default NavBar;
