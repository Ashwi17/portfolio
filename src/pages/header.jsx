import Avatar from "@mui/material/Avatar";
import "../assets/css/style.css";
import profileIMage from "../assets/images/IMG_20251204_195132.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Dialog from "@mui/material/Dialog";

function Header() {
  const [open, setOpen] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);

  return (
    <>
      <header className="header">
        <div className="header-section">
          <div className="header-left">
            <Avatar
              alt="Profile"
              src={profileIMage}
              sx={{ width: 56, height: 56 }}
              onClick={() => setOpenAvatar(true)}
            />
          </div>
          <div className="header-right">
            <HashLink smooth to="/">
              Home
            </HashLink>
            <Link to="/about">About</Link>
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
            <HashLink smooth to="/#skills">
              Skills
            </HashLink>
            <HashLink smooth to="/#contact">
              Contact
            </HashLink>
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

        <HashLink to="/" onClick={() => setOpen(false)}>
          Home
        </HashLink>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <HashLink smooth to="#projects">
          Projects
        </HashLink>
        <HashLink smooth to="#skills">
          Skills
        </HashLink>
        <HashLink smooth to="/#contact" onClick={() => setOpen(false)}>
          Contact
        </HashLink>
        <button type="submit" className="talk-button">
          Let's Talk
        </button>
      </div>

      {/* Popup */}
      <Dialog open={openAvatar} onClose={() => setOpenAvatar(false)}>
        <img
          src={profileIMage}
          alt="profile"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Dialog>
    </>
  );
}

export default Header;
