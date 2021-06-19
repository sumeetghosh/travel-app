import React from "react";
import Button from "../../UI/Button";
import "../../App.css";
import classes from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={classes["hero-container"]}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className={classes["hero-btns"]}>
        <Button
          className={classes.btns}
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className={classes.btns}
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
