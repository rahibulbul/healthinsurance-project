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
      <Link to="/" className="header-logo-link">
        prime
      </Link>
      <ul>
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">
            Services
          </Link>
        </li>
        <li>
          <Link to="/get-quote" className="nav-link">
            Get Quote
          </Link>
        </li>
        <li>
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </li>
        <li>
          <Link to="/Login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
