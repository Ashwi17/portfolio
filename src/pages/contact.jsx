import "../assets/css/style.css";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <div className="contact-tile">
          <div className="contact-head">
            <div className="intro-text">Get In Touch</div>
            <div className="p-title">
              Let's <span className="gradient-text">Connect</span>
            </div>
            <div className="p-desc">
              Have a project in mind? Let's discuss how we can make it.
            </div>
          </div>

          <div className="contact-details">
            <div className="contact-wrap1">
              <div className="contact-info">
                <span className="material-symbols-outlined">mail</span>
                <span className="contact-info-text">
                  <p>Email</p>
                  <h4>ashwinjoseph1703@gmail.com</h4>
                </span>
              </div>

              <div className="contact-info">
                <span className="material-symbols-outlined">location_on</span>
                <span className="contact-info-text">
                  <p>Location</p>
                  <h4>Ernakulam, Kerala</h4>
                </span>
              </div>
            </div>

            <div className="contact-wrap2">
              <form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
                <input type="text" name="name" required />
                <textarea name="message" required></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
