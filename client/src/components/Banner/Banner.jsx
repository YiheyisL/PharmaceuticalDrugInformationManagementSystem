// Banner.jsx
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import classes from "./banner.module.css";

const Banner = ({ isUserRegistered }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [redirectToSignUp, setRedirectToSignUp] = useState(false);

  const handleSearch = () => {
    if (!isUserRegistered) {
      setRedirectToSignUp(true);
    } else {
      // Implement search logic here
      console.log("Searching for", searchTerm);
    }
  };

  if (redirectToSignUp) {
    return <Navigate to="/auth" />;
  }

  return (
    <div className={classes.container}>
      <div className={classes.doctor}></div>
      <div className={classes.search_bar}>
        <div className={classes.text}>Search your Medication here</div>
        <input
          type="text"
          placeholder="Enter medicine name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={classes.search_button} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Banner;
