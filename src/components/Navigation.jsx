import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="navigation-bar">
      <nav className="container">
        <ul clasName="flex">
          <li>
            <img src={props.homeIcon} alt="home-icon" />
          </li>
          <li>
            <img src={props.localStorage} alt="tick-mark" />
          </li>
          <li>
            <img src={props.plusIcon} alt="plus-icon" />
          </li>
          <li>
            <img src={props.notification} alt="bell-icon" />
          </li>
          <li>
            <img src={props.profileIcon} alt="avatar" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
