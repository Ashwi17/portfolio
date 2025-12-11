import { HashLink } from "react-router-hash-link";
import "../assets/css/style.css";
import profileImage from "../assets/images/IMG_20251204_195132.jpg";
import { useState } from "react";

function Hero() {
  const [activeTab, setActiveTab] = useState("company");

  return (
    <>
      {/*========================= Hero Section ============================*/}
      <section className="hero">
        <p className="intro-text">Hello, I'm</p>

        <h1 className="hero-title">
          Ashwin <span className="gradient-text">Joseph</span>
        </h1>

        <p className="hero-subtitle">
          Dedicated and enthusiastic Diploma holder in Computer Engineering with
          a strong foundation in software development, networking, and hardware
          systems. Adept at problem-solving, with hands-on experience in
          programming languages such as C++, Java, and Python, as well as
          familiarity with web development and database management. Proven
          ability to work both independently and in team settings, with a
          passion for learning new technologies and applying them to real-world
          projects. Seeking to leverage technical expertise and academic
          knowledge to contribute effectively to a forward-thi nking
          organization.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            <HashLink smooth to="/#projects">
              View My Work
            </HashLink>
          </button>
          <button className="btn-outline">
            <HashLink snooth to="/contact">
              Get In Touch
            </HashLink>
          </button>
        </div>

        <div className="scroll-down">↓</div>

        <div className="hero-icons">
          <a href="https://github.com/Ashwi17" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ashwin-joseph-b9289731b"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:ashwinjoseph1703@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>
      {/*========================= Profile Section ============================*/}
      <section className="profile">
        <div className="profile-left">
          <img src={profileImage} alt="Profile Image" />
        </div>
        <div className="profile-right">
          <p className="intro-text">About Me</p>
          <h1>
            Turning ideas into <span className="gradient-text">reality</span>
          </h1>
          <p className="profile-content">
            Dedicated and enthusiastic Diploma holder in Computer Engineering
            with a strong foundation in software development, networking, and
            hardware systems. Adept at problem-solving, with hands-on experience
            in programming languages such as C++, Java, and Python, as well as
            familiarity with web development and database management. <br />
            <br /> Proven ability to work both independently and in team
            settings, with a passion for learning new technologies and applying
            them to real-world projects. Seeking to leverage technical expertise
            and academic knowledge to contribute effectively to a forward-thi
            nking organization.
          </p>

          <div className="profile-btm">
            <div className="profile-experience">
              <span className="gradient-text"> 6 </span> Months Exp.
            </div>
            <div className="profile-experience">
              <span className="gradient-text"> 5+ </span> Projects
            </div>
            <div className="profile-experience">
              <span className="gradient-text"> 5+ </span> Clients
            </div>
          </div>
        </div>
      </section>
      {/*========================= My Work Section ============================*/}
      <section className="projects" id="projects">
        <div className="p-head">
          <div className="intro-text">My Work</div>
          <div className="p-title">
            Featured <span className="gradient-text">Projects</span>
          </div>
          <div className="p-desc">
            These projects showcases my skills and passion for building great
            products
          </div>
        </div>

        <div className="project-tabs">
          <div
            className={`cmpny-project ${
              activeTab === "company" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("company")}
          >
            Company Projects
          </div>
          <div
            className={`clg-project ${
              activeTab === "college" ? "active-tab" : ""
            }`}
            onClick={() => setActiveTab("college")}
          >
            College Projects
          </div>
        </div>

        {/* Contents  */}
        <div className="project-content">
          {/* Company Projects Secton */}
          {activeTab === "company" && (
            <div className="company-section">
              {/* Project tiles here */}

              <div className="project-tiles">
                {/* <div className="t-tile">
                  <p>
                    <span className="gradient-text">MVD Virtual PRO</span>
                  </p>
                  <div className="hover-content">
                    Took Part in developing MVD virtual PRO Digital directory.{" "}
                    <br /> <br />
                    Created a website for this digital directory.
                    <div className="language">
                      <div className="p-language">HTML</div>
                      <div className="p-language">CSS</div>
                      <div className="p-language">JavaScript</div>
                    </div>
                  </div>
                </div> */}
                <div className="f-tile">
                  <p>
                    <span className="gradient-text">E-commerce Website</span>
                  </p>
                  <div className="hover-content">
                    A Modern E-commerce solution with realtime beautiful product
                    showcases and offers display
                    <div className="language">
                      <div className="p-language">Php Laravel</div>
                      <div className="p-language">SQL</div>
                    </div>
                  </div>
                </div>

                <div className="s-tile">
                  <p>
                    <span className="gradient-text">Client Website</span>
                  </p>
                  <div className="hover-content">
                    Created a website to showcase the client's services and
                    informatin about them
                    <div className="language">
                      <div className="p-language">React</div>
                      <div className="p-language">NodeJs</div>
                    </div>
                  </div>
                </div>

                <div className="t-tile">
                  <p>
                    <span className="gradient-text">Company Website</span>
                  </p>
                  <div className="hover-content">
                    Modified the company website, by creating a new one and
                    adding all new project details which company finished and
                    displaying them on the home page and dedicated page for them
                    <div className="language">
                      <div className="p-language">HTML</div>
                      <div className="p-language">CSS</div>
                      <div className="p-language">JavaScript</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* College Projects Section */}
          {activeTab === "college" && (
            <div className="college-section">
              {/* Project tiles here */}

              <div className="project-tiles">
                <div className="f-tile">
                  <p>
                    <span className="gradient-text">
                      Bank Website ( 1nd Year )
                    </span>
                  </p>
                  <div className="hover-content">
                    Developed a website for bank, to display bank details.
                  </div>
                </div>

                <div className="s-tile">
                  <p>
                    <span className="gradient-text">
                      Bank Administration Website ( 2st Year )
                    </span>
                  </p>
                  <div className="hover-content">
                    Connected frontend of the bank website to MySql and
                    validated user transactions.
                  </div>
                </div>

                <div className="t-tile">
                  <p>
                    <span className="gradient-text">
                      Medical Services Application (3rd Year)
                    </span>
                  </p>
                  <div className="hover-content">
                    Developed an application which contains most of the medical
                    services which can be done online. <br />
                    <br />
                    This application contained Services such as take
                    appointments with doctor online and consult them through
                    video calls. Pepole can donate blood through this app and
                    also all of the registed blood donators will be notified if
                    any urgent blood request occurs. can contact the nearest
                    Ambulance for emergency cases. This application contained an
                    online pharmacy where home delivery available. This is an
                    all round medical application which could be helpful for all
                    people.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      {/*======================== My Expericence ==============================*/}
      <section className="my-experience" id="skills">
        <div className="p-head">
          <div className="intro-text">My Expertise</div>
          <div className="p-title">
            Skills & <span className="gradient-text">Technologies</span>
          </div>
          <div className="p-desc">Technologies and tools i used</div>
        </div>

        <div className="languages-used">
          <div className="l-tile">
            <div className="f-head">Frontend</div>
            <p>React</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>Python</p>
            <p>Python Django</p>
          </div>
          <div className="l-tile">
            <div className="f-head">Backend</div>
            <p>NodeJs</p>
            <p>Laravel</p>
            <p>MySQL</p>
            <p>Firebase</p>
          </div>
          <div className="l-tile">
            <div className="f-head">Tools</div>
            <p>Git</p>
            <p>Figma</p>
            <p>VS Code</p>
          </div>
        </div>
      </section>
      {/*======================== End Of Code =================================*/}
    </>
  );
}

export default Hero;
