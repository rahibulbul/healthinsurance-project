import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      } else {
        console.error("Header element not found");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="header">
      <Link to="" className="header-logo">
        Square
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav-link nav-active">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            Services
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            Care Home
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            Reward
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            Support
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            Get a quote
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li>
          <Link to="#" className="nav-link">
            User
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
