import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
export default function LocalStorage() {
  return (
    <section className="local-storage-section">
      <Header />
      <div className="hero container">
        <h1>Local storage</h1>
        <div className="search-box">
          <i className="ri-search-line"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="folder-category flex-between">
        <div>
          <img src="./media/video.png" alt="video-logo" />
          <p>Video</p>
        </div>
        <div>
          <img src="./media/image.png" alt="image-logo" />
          <p>Image</p>
        </div>
        <div>
          <img src="./media/music.png" alt="music-logo" />
          <p>Music</p>
        </div>
        <div>
          <img src="./media/archive.png" alt="archive-logo" />
          <p>Archive</p>
        </div>
      </div>

      <div className="list-file container">
        <div className="file flex-between">
          <div className="flex">
            <img src="./media/music-2.png" alt="music-logo" />
            <div className="content">
              <h3>Franky Wah - Aftertime</h3>
              <p>mp3 . 9.2mb</p>
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
              <h3>Annies new car</h3>
              <p>jpg . 4.8mb</p>
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
              <h3>Top secret archive</h3>
              <p>zip . 3.7gb</p>
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
            <img src="./media/video.png" alt="video-logo" />
            <div className="content">
              <h3>Fun times</h3>
              <p>mp4 . 1gb</p>
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
        localStorage={"./media/local-storage-active.png"}
        notification={"./media/notification-icon.png"}
        profileIcon={"./media/profile-icon.png"}
        plusIcon={"./media/plus-icon.png"}
      />
    </section>
  );
}
