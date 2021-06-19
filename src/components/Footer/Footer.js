import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.FooterContainer}>
      <section className={classes.FooterSubscription}>
        <p className={classes.FooterSubscriptionHeading}>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className={classes.FooterSubscriptionText}>
          You can unsubscribe at anytime.
        </p>
        <div className={classes.InputAreas}>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={classes.FooterInput}
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className={classes.FooterLinks}>
        <div className={classes.FooterLinkWrapper}>
          <div className={classes.FooterLinkItems}>
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className={classes.FooterLinkItems}>
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className={classes.FooterLinkWrapper}>
          <div className={classes.FooterLinkItems}>
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className={classes.FooterLinkItems}>
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className={classes.SocialMedia}>
        <div className={classes.SocialMediaWrap}>
          <div className={classes.FooterLogo}>
            <Link to="/" className={classes.SocialLogo}>
              TRVL &nbsp;
              <i class="fas fa-umbrella-beach" />
            </Link>
          </div>
          <small className={classes.WebsiteRights}>TRVL © 2021</small>
          <div className={classes.SocialIcons}>
            <Link
              className={`${classes.SocialIconLink} ${classes.Facebook}`}
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>

            <Link
              className={`${classes.SocialIconLink} ${classes.Instagram}`}
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              className={`${classes.SocialIconLink} ${classes.Youtube}`}
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              className={`${classes.SocialIconLink} ${classes.Twitter}`}
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              className={`${classes.SocialIconLink} ${classes.Twitter}`}
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
