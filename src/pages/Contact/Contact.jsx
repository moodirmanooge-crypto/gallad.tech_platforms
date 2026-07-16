import "./Contact.css";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-container">

        <div className="contact-left">

          <h1>Let's Work Together</h1>

          <p>
            Have a project in mind?
            Contact Gallad.Tech Platforms today.
          </p>

          <a
            href="https://wa.me/252628276993"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaWhatsapp />

            <div>
              <h3>WhatsApp</h3>
              <p>+252 628 276 993</p>
            </div>

          </a>

          <a
            href="mailto:galladtechplatforms@gmail.com"
            className="contact-card"
          >
            <FaEnvelope />

            <div>
              <h3>Email</h3>
              <p>galladtechplatforms@gmail.com</p>
            </div>

          </a>

        </div>

        <div className="contact-right">

          <form
            action="https://formsubmit.co/galladtechplatforms@gmail.com"
            method="POST"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;