import React from "react";
import classes from "./contactUs.module.css";

import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className={classes.container}>
      <Link to={"/"}>
        <h2>Contact Us</h2>
      </Link>
      <p>
        For any inquiries or assistance regarding the PDIMS system, please
        contact us:
      </p>
      <ul>
        <li>Email: pdims@example.com</li>
        <li>Phone: +251-911-301-664</li>
        <li>Address: KK, Addis Abebe, Ethiopia</li>
      </ul>
    </div>
  );
};

export default ContactUs;
