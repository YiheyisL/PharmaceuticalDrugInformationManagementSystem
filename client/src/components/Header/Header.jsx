import React from "react";
import classes from "./header.module.css";
import logo from "../image/10001.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <div className={classes.fixed}>
      <div className={classes.header__container}>
        {/* logo and list */}
        <div className={classes.left_wrapper}>
          <div>
            <div>
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>

            <div className={classes.left_wrapper_list}>
              <Link to="/list">Pharmacy</Link>
            </div>
          </div>
        </div>
        {/* search */}
        <div className={classes.search1}>
          <Link to="/auth">
            Search{<BsSearch size={20} style={{ color: "red" }} />}
          </Link>
        </div>
        {/* auth */}
        <div className={classes.write_wrapper}>
          <Link to="/auth">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
