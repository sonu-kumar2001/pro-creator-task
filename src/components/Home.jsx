import React from "react";
import Navigation from "./Navigation";
import Header from "./Header";
const Home = () => {
  return (
    <>
      <section className="home">
        <div className="hero-section">
          <Header />
          <div className="container">
            <div className="details">
              <h2>Hello Jessie,</h2>
              <p>at the moment you have</p>
            </div>
            <div className="storage-detail">
              <p>
                <strong>32,5 GB</strong> of 100 GB free
              </p>
              <img src="./media/buttons_small.png" alt="up-arrow" />
            </div>
            <div className="progress-bar-1">
              <div className="inner-progress-1"></div>
            </div>
          </div>
        </div>
        <div className="second-section container">
          <div className="search-box">
            <i className="ri-search-line"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div className="file-folder-section">
            <div className="flex">
              <h3 className="files">FILES</h3>
              <h3 className="folders">FOLDERS</h3>
            </div>
          </div>
          <div className="folder-active-bar"></div>
        </div>
        <hr />
        <div className="folder-parent container">
          <div className="folder-storage-details ">
            <div className="flex">
              <h5>The next big thing</h5>
              <img src="./media/three-dots.png" alt="three-vertical-dots" />
            </div>
            <p>12f. 2.1gb</p>
            <div className="content-folder">
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
              <div className="content">
                <p>+7</p>
              </div>
            </div>
          </div>
          <div className="folder-storage-details ">
            <div className="flex">
              <h5>Top secret</h5>
              <img src="./media/three-dots.png" alt="three-vertical-dots" />
            </div>
            <p>7 f. 523mb</p>
            <div className="content-folder second-contnet">
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
              <div className="content">
                <p>+2</p>
              </div>
            </div>
          </div>
          <div className="folder-storage-details ">
            <div className="flex">
              <h5>
                Freebie <br /> Project
              </h5>
              <img src="./media/three-dots.png" alt="three-vertical-dots" />
            </div>
            <p>3 f. 192mb</p>
            <div className="content-folder">
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
            </div>
          </div>
          <div className="folder-storage-details ">
            <div className="flex">
              <h5>London meetup</h5>
              <img src="./media/three-dots.png" alt="three-vertical-dots" />
            </div>
            <p>453 f. 1.7gb</p>
            <div className="content-folder">
              <div className="content"></div>
              <div className="content"></div>
              <div className="content"></div>
              <div className="content">
                <p>+3</p>
              </div>
            </div>
          </div>
        </div>

        <Navigation
          homeIcon={"./media/home-icon.png"}
          localStorage={"./media/local-storage-icon.png"}
          notification={"./media/notification-icon.png"}
          profileIcon={"./media/profile-icon.png"}
          plusIcon={"./media/plus-icon.png"}
        />
      </section>
    </>
  );
};

export default Home;
