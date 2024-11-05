import brandLogo from "../assets/images/brand_logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [mainPageNav, setMainPageNav] = useState(true);

  const handleToggleClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    console.log(navbarToggler.getAttribute("aria-expanded"));

    if (navbarToggler.getAttribute("aria-expanded") === "true") {
      setIsNavbarOpen(true);
    } else {
      setIsNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setMainPageNav(false);
    } else {
      setMainPageNav(true);
    }
  }, []);

  const handleLinkClick = () => {
    if (window.location.pathname !== "/") {
      setMainPageNav(false);
    } else {
      setMainPageNav(true);
    }
  };

  return (
    <header className="header">
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          isNavbarOpen ? "nav-bg" : ""
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand header-style " href="/">
            <img
              src={brandLogo}
              alt="Briana Designs Logo"
              className="brand-img"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleClick}
          >
            <span className="navbar-toggler-icon !important"></span>
          </button>
          {mainPageNav ? (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul
                className={`navbar-nav ms-auto m-2`}
                onClick={handleLinkClick}
              >
                <li className="nav-item">
                  <a className="nav-link  link-style" href="#home">
                    About Me
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link  link-style" href="#services">
                    Services
                  </a>
                </li>

                <li className="nav-item">
                  <Link to="/gallery" className="nav-link link-style">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className="nav-link link-style">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul
                className={`navbar-nav ms-auto m-2`}
                onClick={handleLinkClick}
              >
                <Link to="/" className="nav-link  link-style">
                  <li className="nav-item">Home</li>
                </Link>

                <li className="nav-item">
                  <Link to="/gallery" className="nav-link  link-style">
                    Gallery
                  </Link>
                </li>

                <Link to="/blog" className="nav-link  link-style">
                  <li className="nav-item">Blog</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
