import Avatar from "@mui/material/Avatar";
import "../assets/css/style.css";
import profileIMage from "../assets/images/IMG_20251204_195132.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hero from "./hero";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-section">
          <div className="header-left">
            <Avatar
              alt="Profile"
              src={profileIMage}
              sx={{ width: 56, height: 56 }}
            />
          </div>
          <div className="header-right">
            <Link to="/about">About</Link>
            <Link to="#project">Projects</Link>
            <Link to="#">Skills</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Desktop Button */}
          <button type="submit" className="talk-button">
            Let's Talk
          </button>

          {/* Hamburger / 3 dots icon (visible only below 769px) */}
          <div className="hamburger" onClick={() => setOpen(true)}>
            <span className="material-icons-outlined">menu</span>
          </div>
        </div>
      </header>

      {/* Drawer Section */}
      <div className={`mobile-drawer ${open ? "drawer-open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)}>
          <span className="material-icons-outlined">close</span>
        </button>

        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="#">Projects</Link>
        <Link to="#">Skills</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
          <button type="submit" className="talk-button">
            Let's Talk
          </button>
      </div>
    </>
  );
}

export default Header;
