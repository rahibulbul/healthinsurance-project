// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import HeaderLogo from "../../../assets/img/protection.png";
// import "./header.css";
// const Header = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector("header");
//       if (header) {
//         header.classList.toggle("sticky", window.scrollY > 0);
//       } else {
//         console.error("Header element not found");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <header className="header">
//       <div className="header-logo">
//         <img src={HeaderLogo} alt="header-logo" />
//         <span className="title">
//           Health<span className="title-red">Care</span>
//         </span>
//       </div>
//       <ul>
//         <li>
//           <Link to="/" className="nav-link nav-active">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="#" className="nav-link">
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link to="#" className="nav-link">
//             Care Home
//           </Link>
//         </li>
//         <li>
//           <Link to="#" className="nav-link">
//             Reward
//           </Link>
//         </li>
//         <li>
//           <Link to="#" className="nav-link">
//             Support
//           </Link>
//         </li>
//         <li>
//           <Link to="#" className="nav-link">
//             Get a quote
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" className="nav-link">
//             Login
//           </Link>
//         </li>
//       </ul>
//     </header>
//   );
// };

// export default Header;

// import React, { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import HeaderLogo from "../../../assets/img/protection.png";
// import "./header.css";

// const Header = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const header = document.querySelector("header");
//       if (header) {
//         header.classList.toggle("sticky", window.scrollY > 0);
//       } else {
//         console.error("Header element not found");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const isActive = (path) => {
//     return location.pathname === path ? "nav-active" : "";
//   };

//   return (
//     <header className="header">
//       <div className="header-logo">
//         <img src={HeaderLogo} alt="header-logo" />
//         <span className="title">
//           Health<span className="title-red">Care</span>
//         </span>
//       </div>
//       <ul>
//         <li>
//           <Link to="/" className={`nav-link ${isActive("/")}`}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/services" className={`nav-link ${isActive("/services")}`}>
//             Services
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="/care-home"
//             className={`nav-link ${isActive("/care-home")}`}
//           >
//             Care Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/reward" className={`nav-link ${isActive("/reward")}`}>
//             Reward
//           </Link>
//         </li>
//         <li>
//           <Link to="/support" className={`nav-link ${isActive("/support")}`}>
//             Support
//           </Link>
//         </li>
//         <li>
//           <Link to="/quote" className={`nav-link ${isActive("/quote")}`}>
//             Get a quote
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" className={`nav-link ${isActive("/login")}`}>
//             Login
//           </Link>
//         </li>
//       </ul>
//       <div className="header-collapse">
//         <i class="fa-solid fa-bars header-collapse-icon"></i>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React, { useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import HeaderLogo from "../../../assets/img/protection.png";
// import "./header.css";

// const Header = () => {
// const location = useLocation();

// useEffect(() => {
//   const handleScroll = () => {
//     const header = document.querySelector("header");
//     if (header) {
//       header.classList.toggle("sticky", window.scrollY > 0);
//     } else {
//       console.error("Header element not found");
//     }
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

// const isActive = (path) => {
//   return location.pathname === path ? "nav-active" : "";
// };

// const toggleMenu = () => {
//   const nav = document.querySelector("header ul");
//   nav.classList.toggle("active");
// };

//   return (
//     <header className="header">
//       <div className="header-logo">
//         <img src={HeaderLogo} alt="header-logo" />
//         <span className="title">
//           Health<span className="title-red">Care</span>
//         </span>
//       </div>
//       <div className="header-collapse" onClick={toggleMenu}>
//         <i className="fa-solid fa-bars header-collapse-icon"></i>
//       </div>
//       <nav>
//         <ul>
// <li>
//   <Link to="/" className={`nav-link ${isActive("/")}`}>
//     Home
//   </Link>
// </li>
// <li>
//   <Link
//     to="/services"
//     className={`nav-link ${isActive("/services")}`}
//   >
//     Services
//   </Link>
// </li>
// <li>
//   <Link
//     to="/care-home"
//     className={`nav-link ${isActive("/care-home")}`}
//   >
//     Care Home
//   </Link>
// </li>
// <li>
//   <Link to="/reward" className={`nav-link ${isActive("/reward")}`}>
//     Reward
//   </Link>
// </li>
// <li>
//   <Link to="/support" className={`nav-link ${isActive("/support")}`}>
//     Support
//   </Link>
// </li>
// <li>
//   <Link to="/quote" className={`nav-link ${isActive("/quote")}`}>
//     Get a quote
//   </Link>
// </li>
// <li>
//   <Link to="/login" className={`nav-link ${isActive("/login")}`}>
//     Login
//   </Link>
// </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = () => {
  const location = useLocation();

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

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          HealthCare
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${isActive("/")}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className={`nav-link ${isActive("/services")}`}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/care-home"
                className={`nav-link ${isActive("/care-home")}`}
              >
                Care Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reward" className={`nav-link ${isActive("/reward")}`}>
                Reward
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/support"
                className={`nav-link ${isActive("/support")}`}
              >
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/quote" className={`nav-link ${isActive("/quote")}`}>
                Get a quote
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className={`nav-link ${isActive("/login")}`}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
