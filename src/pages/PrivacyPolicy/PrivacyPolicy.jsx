// src/pages/PrivacyPolicy/PrivacyPolicy.jsx
// Privacy Policy — public page (no login required).
// URL: https://galladtech.com/privacy-policy
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaShieldAlt, FaEnvelope, FaGlobe, FaBuilding } from "react-icons/fa";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/layout/Footer";
import "./PrivacyPolicy.css";

const COMPANY = "Gallad Tech Platforms";
const WEBSITE = "https://galladtech.com";
const CONTACT_EMAIL = "galladtechplatforms@gmail.com";
const EFFECTIVE_DATE = "October 9, 2026";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    body: (
      <p>
        {COMPANY} (“we”, “us”, “our”) respects your privacy. This Privacy Policy explains how we
        collect, use, store, and protect information when you use our website and mobile
        application (together, the “Services”).
      </p>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    body: (
      <>
        <p>
          Depending on the features you use, we may collect information that you provide directly,
          such as:
        </p>
        <ul>
          <li>
            <strong>Account details</strong> — your name, email address, and password when you
            register or sign in.
          </li>
          <li>
            <strong>Contact and order requests</strong> — your name, email address, phone number,
            the service you are interested in, and the message or project details you send us.
          </li>
          <li>
            <strong>Comments</strong> — the name and comment you submit on our portfolio pages.
          </li>
        </ul>
        <p>
          We may also collect limited technical information, such as device type, app version, and
          diagnostic information, to maintain and improve our Services. Our website stores a small
          amount of data in your browser (for example, to remember items you have liked and to keep
          you signed in). We do not use advertising cookies.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    body: (
      <>
        <p>We may use collected information to:</p>
        <ul>
          <li>Provide and maintain our Services.</li>
          <li>Create and manage user accounts.</li>
          <li>Respond to questions, quotes, and support requests.</li>
          <li>Improve app performance, reliability, and security.</li>
          <li>Comply with applicable legal requirements.</li>
        </ul>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing of Information",
    body: (
      <p>
        We do not sell personal information. Information may be shared with service providers who
        help us operate our Services, when required by law, or when necessary to protect our users
        and Services. Comments you post on our portfolio pages are visible to other visitors.
      </p>
    ),
  },
  {
    id: "security",
    title: "Data Storage and Security",
    body: (
      <p>
        Information is stored with trusted cloud providers and transmitted over encrypted
        connections (HTTPS). We take reasonable measures to protect information against unauthorized
        access, loss, misuse, or disclosure. However, no electronic storage or transmission method
        can be guaranteed to be completely secure.
      </p>
    ),
  },
  {
    id: "retention",
    title: "Data Retention and Deletion",
    body: (
      <>
        <p>
          We retain information only for as long as reasonably necessary for the purposes described
          in this policy or as required by law. Users may request deletion of their personal
          information by contacting us.
        </p>
        <p>
          To request deletion of your account and its associated data, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> from the email address linked to
          your account, with the subject “Account Deletion Request”. We will process your request
          within 30 days. Any applicable legal retention requirements may still apply.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    body: (
      <p>
        Our Services are not intentionally directed toward children under 13 unless explicitly
        stated otherwise. We do not knowingly collect children's personal information without the
        appropriate legal basis and required consent. If you believe a child has provided us with
        personal information, please contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    body: (
      <p>
        Our Services may use third-party services for hosting, authentication, data storage,
        analytics, or other functions — including Google Firebase. These providers may process
        information according to their own privacy policies, such as the{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          Google Privacy Policy
        </a>
        .
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Any changes will be published on this
        page with an updated effective date.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: <p>For privacy questions or data deletion requests, contact:</p>,
  },
];

function PrivacyPolicy() {
  useEffect(() => {
    const prev = document.title;
    document.title = `Privacy Policy | ${COMPANY}`;
    window.scrollTo(0, 0);
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="privacy-page">
        <div className="privacy-back">
          <Link to="/">
            <FaArrowLeft /> Back to Home
          </Link>
        </div>

        <header className="privacy-hero">
          <span className="privacy-hero-icon">
            <FaShieldAlt />
          </span>
          <h1>Privacy Policy</h1>
          <p>{COMPANY}</p>
          <p className="privacy-date">Effective Date: {EFFECTIVE_DATE}</p>
        </header>

        <div className="privacy-layout">
          <aside className="privacy-toc">
            <p>Contents</p>
            <ol>
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>
                    {i + 1}. {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="privacy-body">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="privacy-section">
                <h2>
                  <span>{i + 1}.</span> {s.title}
                </h2>
                <div className="privacy-text">{s.body}</div>

                {s.id === "contact" && (
                  <div className="privacy-contact">
                    <div>
                      <FaBuilding /> {COMPANY}
                    </div>
                    <a href={WEBSITE} target="_blank" rel="noopener noreferrer">
                      <FaGlobe /> {WEBSITE.replace("https://", "")}
                    </a>
                    <a href={`mailto:${CONTACT_EMAIL}`}>
                      <FaEnvelope /> {CONTACT_EMAIL}
                    </a>
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;