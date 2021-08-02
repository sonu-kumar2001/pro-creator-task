import { React, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
  const [checked, setChecked] = useState(false);
  const uploadHandler = () => {
    setChecked(!checked);
  };
  const closeHandler = () => {
    setChecked(!checked);
  };
  return (
    <>
      <div className={checked ? "hidden" : "visible navigation-bar"}>
        <nav className="container">
          <ul className="flex">
            <li>
              <Link
                to={{
                  pathname: "/home",
                  state: checked
                }}
              >
                <img src={props.homeIcon} alt="home-icon" />
              </Link>
            </li>
            <li>
              <Link to="/localstorage">
                <img src={props.localStorage} alt="tick-mark" />
              </Link>
            </li>
            <li onClick={uploadHandler}>
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
      <div className={checked ? "visible blur" : "hidden"}></div>
      <div className={checked ? "visible upload-section" : "hidden"}>
        <div className="upload-inner-section flex-between">
          <img src="./media/scan.png" alt="scan-logo" />
          <img src="./media/camera.png" alt="camera-logo" />
          <img src="./media/upload.png" alt="upload-logo" />
        </div>
        <div onClick={closeHandler} className="close">
          <img src="./media/cross.png" alt="cross-logo" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
