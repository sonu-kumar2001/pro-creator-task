import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Notification() {
  return (
    <>
      <section className="notification">
        <Header />
        <div className="hero container">
          <h2>Notifications</h2>
        </div>
        <div className="notification-detail container">
          <div className="img-container">
            <img
              src="./media/notification-illustration.png"
              alt="kite-flying-in-the-sky"
            />
          </div>
          <div className="details">
            <h3>No notifications yet</h3>
            <p>
              Here you will see the external changes in your shared folders,tags
              from your peers and other updates
            </p>
          </div>
        </div>
      </section>
      <Navigation
        homeIcon={"./media/home-inactive.png"}
        localStorage={"./media/local-storage-icon.png"}
        notification={"./media/notification-active.png"}
        profileIcon={"./media/profile-icon.png"}
        plusIcon={"./media/plus-icon.png"}
      />
    </>
  );
}
