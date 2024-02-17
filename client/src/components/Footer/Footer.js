import React from "react";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import "./footer.css";

function Footer() {
  return (
    <div className="footer_outer_container">
      <div className="footer_inner_container">
        <div className="footer_data">
          <div>
            <ul>
              <Link to="/contact">
                <li>Contact us</li>
              </Link>
              <li>Term And Condtion</li>
              <li>Privacy Polcy</li>
            </ul>
          </div>
          <div>
            <ul>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="footer_icons">
          <p>
            Follow us :
            <FacebookOutlinedIcon className="facebook" />
            <InstagramIcon className="instagram" />
            <YouTubeIcon className="youtube" />
            <XIcon className="x" />
          </p>
        </div>
        <div className="copy-write">&copy;2024 PDIMS: Inc</div>
      </div>
    </div>
  );
}

export default Footer;
