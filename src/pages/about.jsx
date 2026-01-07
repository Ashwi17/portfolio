import "../assets/css/style.css";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="about-section">
          <div className="about-head">
            <h6>Hi, I am</h6>
            <h1>
              Ashwin <span className="gradient-text">Joseph</span>
            </h1>
          </div>
          <p>
            My self I'm Ashwin Joseph i am a dedicated and enthusiastic Diploma
            holder in Computer Engineering with a strong foundation in software
            development, networking, and hardware systems. Adept at
            problem-solving, with hands-on experience in programming languages
            such as C++, Java, and Python, as well as familiarity with web
            development and database management. Proven ability to work both
            independently and in team settings, with a passion for learning new
            technologies and applying them to real-world projects. Seeking to
            leverage technical expertise and academic knowledge to contribute
            effectively to a forward-thi nking organization.
          </p>
        </div>
      </section>

      <section className="education-section">
        <h1>
          Educational <span className="gradient-text"> Qualifications </span>{" "}
        </h1>
        <div className="education-tiles">
          <div className="e-tiles">
            <h1>
              Diploma in{" "}
              <span className="gradient-text"> Computer engineering</span>
            </h1>
            <p>Graduated from Govt Polytechnic College Kalamassery</p>
            <span className="time-line">2022 - 2025</span>
          </div>
          <div className="e-tiles">
            <h1>
              {" "}
              Higher<span className="gradient-text"> Secondary </span>
            </h1>
            <p>
              Completed Higher secondary from St. Mary's Hss Vallarpadam in
              computer science{" "}
            </p>
            <span className="time-line">2019 - 2021</span>
          </div>
        </div>
      </section>

      <section className="internship-section">
          <div className="i-block">
            <h1>
              <span className="gradient-text"> Internships</span>
            </h1>
            <div className="i-tile">
              <h2>Internship 1</h2>
              <ul>
                <li>
                  <p>
                    Took part in a one month PHP Internship from I-Net Infotech
                  </p>
                </li>
              </ul>
              <h2>Internship 2</h2>
              <ul>
                <li>
                  <p>
                    Completed a one month internship from Spectrum Softtech
                    Solutions in solving industrial problems using flutter
                  </p>
                </li>
              </ul>
              <h2>Industry on Campus Progremme</h2>
              <ul>
                <li>
                  <p>
                    Got an opportunity to lead Full-Stack developers team in
                    industry on campus progremme lead by BMO Human Development
                    PVT.LTD on project Drutham:Wittross Donation controlling
                    platform 1.0
                  </p>
                </li>
              </ul>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
