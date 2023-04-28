import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Utils from "../../utils/Utils";

const Header = () => {
  const [show, setShow] = useState("top");
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const searchHandle = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
      }, 1000);
    }
  };
  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScroll) {
        setShow("bottom");
      } else {
        setShow("top");
      }
      lastScroll = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  const user = useSelector((state) => state.user.user);
  return (
    <header
      className={`header ${mobileMenu ? "mobileView" : ""} ${
        show !== "top" ? "hide" : ""
      }`}
    >
      <ContentWrapper>
        <div className="logo">
          <img src={Utils.logoUrl} alt="logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          {user ? (
            <li
              className="menuItem"
              onClick={() => {
                localStorage.removeItem("auth");
                navigate("/login");
              }}
            >
              Logout
            </li>
          ) : (
            <li className="menuItem">Login</li>
          )}
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder=""
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchHandle}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
