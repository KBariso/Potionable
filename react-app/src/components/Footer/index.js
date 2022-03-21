import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <ul className="footer">
      <div className="footer-names">
        <div className="name">
          <li>Maxim Grigg</li>
          <li className="icons">
            <a href="https://www.linkedin.com/in/maxim-grigg-42a4451a9/" target="_blank">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/>
            </a>
            <a href="https://github.com/mtgrigg" target="_blank">
            <img src="https://res.cloudinary.com/dd9qejhag/image/upload/v1644768274/Potionable/GitHub-Mark-32px_cpn8bb.png" />            </a>
          </li>
        </div>
        <div className="name">
          <li>Kielvin Bariso</li>
          <li className="icons">
            <a href="https://www.linkedin.com/in/kielvin-bariso/" target="_blank">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/>
            </a>
            <a href="https://github.com/kbariso" target="_blank">
            <img src="https://res.cloudinary.com/dd9qejhag/image/upload/v1644768274/Potionable/GitHub-Mark-32px_cpn8bb.png" />
            </a>
          </li>
        </div>
        <div className="name">
          <li>Robert Popphan</li>
          <li className="icons">
            <a href="https://www.linkedin.com/in/robert-popphan-0b6711126/" target="_blank">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/linkedin.png"/>
            </a>
            <a href="https://github.com/bapboop" target="_blank">
            <img src="https://res.cloudinary.com/dd9qejhag/image/upload/v1644768638/Potionable/GitHub-Mark-32px_j8nze7.png" />
            </a>
          </li>
        </div>
      </div>
    </ul>
    
  );
};

export default Footer;
