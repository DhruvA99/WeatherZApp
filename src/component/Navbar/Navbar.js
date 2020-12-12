import React from "react";
import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.list}>
          <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
            <span className={classes.icon}>
              Weather<span className={classes.zIcon}>Z</span> App
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
