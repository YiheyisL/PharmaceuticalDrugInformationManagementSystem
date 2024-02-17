import React from "react";
import classes from "./about.module.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className={classes.about_container}>
      <div className={classes.about_content}>
        <Link to="/">
          <h2>About PDIMS</h2>
        </Link>
        <p>
          PDIMS (Pharmacy Drug Information Management System) is a system
          designed to help users find medicines and locate the nearest pharmacy
          where the drug is available. The system provides users with a
          convenient way to search for medicines and obtain information about
          their availability.
        </p>
        <p>
          With PDIMS, users can search for a specific medicine by name and view
          a list of pharmacies that stock the medicine. The system also provides
          information about the nearest pharmacy locations, making it easier for
          users to find the medicine they need.
        </p>
        <p>
          PDIMS aims to improve access to essential medicines and streamline the
          process of finding pharmacies that stock specific drugs. By providing
          users with accurate and up-to-date information, PDIMS helps ensure
          that individuals can quickly access the medications they require.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
