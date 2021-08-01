import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";

export default function Profile() {
  return (
    <section className="profile-section">
      <Header />
      <div className="profile-details container">
        <div className="profile-header flex-between">
          <h2>Profile</h2>
          <img src="./media/edit-logo.png" alt="edit-logo" />
        </div>
        <div className="user-details">
          <div className="img-container">
            <img src="./media/user-details.png" alt="userdetails" />
          </div>
          <div className="storage-detail">
            <p>
              <strong>32,5 GB free of</strong> 100 GB
            </p>
            <div className="progress-bar-1">
              <div className="inner-progress-1"></div>
            </div>
            <button>Increase storage space </button>
          </div>
        </div>
      </div>
      <div className="about container">
        <div className="about-box storage-management flex-between">
          <h4>Storage management</h4>
          <img src="./media/right-arrow.png" alt="right-arrow" />
        </div>
        <div className="about-box devices flex-between">
          <div className="content">
            <h4>Devices</h4>
            <p>iPhone,Mackbook,iPad</p>
          </div>
          <img src="./media/right-arrow.png" alt="right-arrow" />
        </div>
        <div className="camera-uploads about-box flex-between">
          <h4>Camera uploads</h4>
          <div className="switch-on">
            <div className="circle"></div>
          </div>
        </div>
        <div className="tarnsfer-files about-box flex-between">
          <h4>Use data for transfer files</h4>
          <div className="switch-of">
            <div className="circle"></div>
          </div>
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
