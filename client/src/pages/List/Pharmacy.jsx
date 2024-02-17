import React, { useState } from "react";
import classes from "./pharmacy.module.css";
import logo from "../../components/image/10001.png";
import { Link } from "react-router-dom";
const pharmacies = [
  {
    name: "AFRICA DRUG STORE",
    address: "Mali St, Addis Ababa",
    phone: "+251111571857",
  },
  {
    name: "ANBESSA GIBE PHARMACY",
    address: "Addis Ababa, Addis Ababa",
    phone: "+251111226740/ +251111248531",
  },
  {
    name: "BEKER PHARMACEUTICALS",
    address: "Kebele 2,  Addis Ababa",
    phone: "+251115503833/ +251115503833/ +251116555002",
  },
  {
    name: "BEMENET DRUG STORE",
    address: "Addis Ababa, Addis Ababa",
    phone: "+251113493838/ +251114161131",
  },
  {
    name: "Bumrungrad International",
    address: "Bole Road, Addis Ababa",
    phone: "+251 116 616472",
  },
  {
    name: "CONNEL PLC",
    address: "Addis Ababa, Addis Ababa",
    phone: "+251112133636",
  },
  {
    name: "DESTA DRUG SHOP",
    address: "Kebele 15,112/04, Addis Ababa",
    phone: "+251115156666",
  },
  {
    name: "Drugssquare - International Specialty Pharmacy",
    address: "Addis Abada, Addis Ababa",
    phone: "+91-9958550955",
  },
  {
    name: "ELFAKAL PVT.LTD.CO.",
    address: "T/haimanot Rd.,  Addis Ababa",
    phone: "+251111575555",
  },
  {
    name: "ENDOD PHARMACEUTICAL",
    address: "Kebele 17, Addis Ababa",
    phone: "+251115531702/ +251115531707",
  },
  {
    name: "ENDOD PHARMACEUTICAL",
    address: "Addis Ababa, Addis Ababa",
    phone: "+251116451767/ +251116515389",
  },
  {
    name: "EYESUS DRUG STORE",
    address: "Addis Ababa, Addis Ababa",
    phone: "",
  },
  {
    name: "FEWES PHARMACEUTICALS FACTORY",
    address: "Addis Ababa, Addis Ababa",
    phone: "+251114392011",
  },
  {
    name: "FEWES PHARMACEUTICALS FACTORY",
    address: "Kebele 12, Addis Ababa",
    phone: "+251112751170/ +251116187510",
  },
  {
    name: "FITUN PHARMACY",
    address: "Nefassilk Lafto, Addis Ababa",
    phone: "+251111568936",
  },
  {
    name: "FNAT PHARMACY",
    address: "Addis Ababa, Addis Ababa",
    phone: "+251115502466",
  },
  {
    name: "GHION PARMACY",
    address: "Ras Desta Damtew Street, Addis Ababa",
    phone: "+251115518606",
  },
];

const Pharmacy = () => {
  return (
    <div className={classes.pharmacies_list}>
      {/* logo */}
      <Link to={"/"} className={classes.login}>
        <img src={logo} alt="" />
      </Link>
      <h2>Pharmacies in Addis Ababa</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {pharmacies.map((pharmacy, index) => (
            <tr key={index}>
              <td>{pharmacy.name}</td>
              <td>{pharmacy.address}</td>
              <td>{pharmacy.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pharmacy;
