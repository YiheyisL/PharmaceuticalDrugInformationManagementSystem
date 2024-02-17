import React from "react";
import "./lower.css";
import { BsSearch } from "react-icons/bs";

function Lower() {
  return (
    <div className="row__poster">
      <h1 className="search">search your medication here</h1>
      <div className="search">
        <select name="" id="">
          <option value="">All</option>
        </select>
        <input type="text" />
        {<BsSearch size={25} />}
      </div>
    </div>
  );
}

export default Lower;
