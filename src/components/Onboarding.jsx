import React from "react";
import illustration from "../media/Illustration.png";
import arrow from "../media/arrow-icon.png";

const Onboarding = () => {
  return (
    <section className="onboarding">
      <div className="hero-section">
        <img
          className="background-banner"
          src={illustration}
          alt="illustration"
        />
        <h2 className="heading-text">
          Your cloud storage <br /> safe and sound
        </h2>
      </div>
      <div className="arrow-icon">
        <img src={arrow} alt="arrow-icon" />
      </div>
    </section>
  );
};

export default Onboarding;
