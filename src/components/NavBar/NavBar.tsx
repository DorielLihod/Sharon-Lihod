import { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import FlagLanguage from "./FlagLanguage";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [t] = useTranslation("global");

  const handleNavBar = () => {
    if (isOpen === false) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  console.log(windowSize[0]); //save the width of screen

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="/">
            <img
              src="public\logoSharon.png"
              alt="Sharon Lihod"
              width="150"
              height="150"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleNavBar}
          >
            {!isOpen ? (
              <span className="navbar-toggler-icon"></span>
            ) : (
              <span className="closeIcon">X</span>
            )}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item nav-link">
                <Link to="/About">{t("navbar.about")}</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/Experience">{t("navbar.experience")}</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/OurServices">{t("navbar.ourServices")}</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/Contact">{t("navbar.Contact")}</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="https://www.linkedin.com/in/sharon-lihod-904b2072/">
                  Linked
                  <span className="linkedin">
                    <AiFillLinkedin size={25} />
                  </span>
                </Link>
              </li>
              {windowSize[0] < 991 && (
                <div className="navbar-icon-language">
                  <FlagLanguage />
                </div>
              )}
            </ul>
          </div>
          {windowSize[0] > 991 && (
            <div className="navbar-icon-language">
              <FlagLanguage />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
