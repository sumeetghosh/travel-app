import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import classes from "./Navbar.module.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const menuClickHandler = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const navMenu = click ? "active" : "";

  return (
    <Fragment>
      <nav className={classes.navbar}>
        <div className={classes["navbar-container"]}>
          <Link
            to="/"
            className={classes["navbar-logo"]}
            onClick={closeMobileMenu}
          >
            TRVL &nbsp; <i className="fas fa-umbrella-beach"></i>
          </Link>
          <div className={classes["menu-icon"]} onClick={menuClickHandler}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          {/* <ul className={classes[navMenu]}> */}
          <ul className={`${classes["nav-menu"]} ${classes[navMenu]}`}>
            <li className={classes["nav-item"]}>
              <Link
                to="/"
                className={classes["nav-links"]}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/services"
                className={classes["nav-links"]}
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/products"
                className={classes["nav-links"]}
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className={classes["nav-item"]}>
              <Link
                to="/sign-up"
                className={classes["nav-links-mobile"]}
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
