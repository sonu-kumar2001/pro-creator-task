import React from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  return (
    <div className="navigation-bar">
      <nav className="container">
        <ul className="flex">
          <li>
            <Link to="/home">
              <img src={props.homeIcon} alt="home-icon" />
            </Link>
          </li>
          <li>
            <Link to="/localstorage">
              <img src={props.localStorage} alt="tick-mark" />
            </Link>
          </li>
          <li>
            <img src={props.plusIcon} alt="plus-icon" />
          </li>
          <li>
            <Link to="/notification">
              <img src={props.notification} alt="bell-icon" />
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <img src={props.profileIcon} alt="avatar" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
