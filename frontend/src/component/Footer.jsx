import React from "react";
import "../style//footer.css";
import "../style//general.css";
import "../style//queries.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className="wrapper">
      <footer className="footer">
        <div className="grid grid--footer" style={{ flexDirection: "row" }}>
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img className="logo" alt="Journals Hub logo" src={logo} />
            </a>
            Made with ❤️ <br />
            <Link to="/developers" style={{textDecoration: "none"}}>Meet our Developer Team</Link>
          </div>

          <div className="address-col">
            <p className="footer-heading">Contact us</p>
            <address className="contacts">
              <p className="address">
                Tanjore Main Road, NH67, near BHEL, Tiruchirappalli, Tamil Nadu
                620015
              </p>
              <p>
                <a style={{textDecoration: "none",cursor: "pointer"}} className="footer-link">
                  support@ijesacbt.com
                </a>
                <br />
                <a style={{textDecoration: "none", cursor: "pointer"}} className="footer-link">
                ijesacbteditor@gmail.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
