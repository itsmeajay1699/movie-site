import React from "react";
import "./footer.scss";
import Img from "../lazyLoadImage/img";
import Utils from "../../utils/Utils";
import { BsInstagram } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-items">
        <div className="first">
          <Img src={Utils.footerLogoUrl} className="img"></Img>
          <span className="span">Hi itsmeajay___</span>
        </div>
        <div className="second">
          <h2>The Basics</h2>
          <ul>
            <li>About TMBD</li>
            <li>Contact Us</li>
            <li>Support Forums</li>
            <li>Api</li>
            <li>System Status</li>
          </ul>
        </div>
        <div className="third">
          <h2>GET INVOLVED</h2>
          <ul>
            <li>Contribution Bible</li>
            <li>Add New Movie</li>
            <li>Add New TV Show</li>
          </ul>
        </div>
        <div className="forth">
          <h2>COMMUNITY</h2>
          <ul>
            <li>Guidelines</li>
            <li>Discussions</li>
            <li>Leaderboard</li>
            <li>Twiter</li>
          </ul>
        </div>
      </div>
      <div className="icons">
        <BsInstagram className="ig-icon" />
        <AiFillGithub className="git-icon" />
        <AiFillLinkedin className="li-icon" />
      </div>
    </div>
  );
};

export default Footer;
///https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg
