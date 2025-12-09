import Avatar from "@mui/material/Avatar";
import "../assets/css/style.css";
import profileIMage from '../assets/images/IMG_20251204_195132.jpg';
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

  const [ open, setOpen ] = useState(false);

  return (
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
          <Link to="#">Projects</Link>
          <Link to="#">Skills</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger Section */}
        <div className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

          {/* Desktop Button */}
          <button type="submit" className="talk-button">Let's Talk</button>
      </div>

      {/* Drawer for Moblie */}
      <div className={`mobile-drawer ${open ? "show" : ""}`}>
        <Link to="/about" onClick={ () => setOpen(false) }>About</Link>
        <Link to="#" onClick={ () => setOpen(false) }>Project</Link>
        <Link to="#" onClick={ () => setOpen(false) }>Skills</Link>
        <Link to="/contact" onClick={ () => setOpen(false) }>Contact</Link>

        <button className="talk-button drawer-btn">Let's Talk</button>
      </div>
    </header>
  );
}

export default Header;
