import React from "react";

const Header = () => {
  return (
    <header>
      <img src="./media/wave.png" alt="wave" />
      <nav className="flex-between container">
        <p>9:41</p>
        <ul className="flex">
          <li>
            <img
              src="./media/cellular-connection.png"
              alt="cellular-connection"
            />
          </li>
          <li>
            <img src="./media/Wifi.png" alt="wifi-logo" />
          </li>
          <li>
            <img src="./media/Battery.png" alt="battery-logo" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
