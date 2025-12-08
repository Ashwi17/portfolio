import "../assets/css/style.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-left">
          ©2025 Ashwin Joseph. Built with Passion.
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com/in/ashwin-joseph-b9289731b" target="_blank"><i className="fa-brands fa-linkedin footer-icons"></i></a>
          <a href="https://github.com/Ashwi17" target="_blank"><i className="fa-brands fa-github footer-icons"></i></a>
          <a href="mailto:ashwinjoseph1703@gmail.com" target="_blank"><i className="fa-solid fa-envelope footer-icons"></i></a>
        </div>
      </div>
    </>
  );
};

export default Footer;
