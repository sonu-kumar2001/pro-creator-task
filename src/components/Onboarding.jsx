import React from "react";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <section className="onboarding">
      <div className="hero-section">
        <img
          className="background-banner"
          src="./media/Illustration.png"
          alt="illustration"
        />
        <h2 className="heading-text">
          Your cloud storage <br /> safe and sound
        </h2>
      </div>
      <div className="arrow-icon">
        <Link to="/home">
          <img src="./media/arrow-icon.png" alt="arrow-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Onboarding;
