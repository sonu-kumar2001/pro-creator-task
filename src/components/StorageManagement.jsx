import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Chart from "./Chart";
import Navigation from "./Navigation";

export default function StorageManagement() {
  return (
    <section className="storage-management">
      <Header />
      <div className="storage-header container flex">
        <Link to="/profile">
          <img src="./media/back-button.png" alt="back-button" />
        </Link>
        <h2>Storage management</h2>
      </div>
      <div className="chart-box container">
        <Chart />
      </div>
      <div className="container">
        <div className="chart-details flex-between">
          <div>
            <div className="chart-logo music"></div>
            <p>Music</p>
          </div>
          <div>
            <div className="chart-logo images"></div>
            <p>Images</p>
          </div>
          <div>
            <div className="chart-logo archives"></div>
            <p>Archives</p>
          </div>
          <div>
            <div className="chart-logo documents"></div>
            <p>Documents</p>
          </div>
          <div>
            <div className="chart-logo video"></div>
            <p>Video</p>
          </div>
        </div>
        <div className="file-folder-section">
          <div className="flex">
            <h4 className="least-used">least used</h4>
            <h4>largest</h4>
            <h4>last accessed</h4>
          </div>
        </div>
      </div>
      <hr />
      <div className="folder-active-bar"></div>

      <div className="list-file container">
        <div className="file flex-between">
          <div className="flex">
            <img src="./media/music-2.png" alt="music-logo" />
            <div className="content">
              <h3>TikTok dance</h3>
              <p>mov . 1 time</p>
            </div>
          </div>
          <img
            className="three-dots"
            src="./media/three-dots.png"
            alt="three vertical dots"
          />
        </div>

        <div className="file flex-between">
          <div className="flex">
            <img src="./media/image-2.png" alt="image-logo" />
            <div className="content">
              <h3>Selfie without beard</h3>
              <p>jpg . 2 times</p>
            </div>
          </div>
          <img
            className="three-dots"
            src="./media/three-dots.png"
            alt="three vertical dots"
          />
        </div>

        <div className="file flex-between">
          <div className="flex">
            <img src="./media/archive-2.png" alt="archive-logo" />
            <div className="content">
              <h3>University lectures</h3>
              <p>zip . 3 times</p>
            </div>
          </div>
          <img
            className="three-dots"
            src="./media/three-dots.png"
            alt="three vertical dots"
          />
        </div>
      </div>
      <Navigation
        homeIcon={"./media/home-inactive.png"}
        localStorage={"./media/local-storage-icon.png"}
        notification={"./media/notification-icon.png"}
        profileIcon={"./media/profile-active.png"}
        plusIcon={"./media/plus-icon.png"}
      />
    </section>
  );
}
