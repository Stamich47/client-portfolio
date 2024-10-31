import brandLogo from "../assets/images/brand_logo.png";
import { useState } from "react";

export default function Header() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleToggleClick = () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    console.log(navbarToggler.getAttribute("aria-expanded"));

    if (navbarToggler.getAttribute("aria-expanded") === "true") {
      setIsNavbarOpen(true);
    } else {
      setIsNavbarOpen(false);
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ms-auto m-2`}>
              <li className="nav-item">
                <a className="nav-link  link-style" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  link-style" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  link-style" href="#Gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  link-style" href="#blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
