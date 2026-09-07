import "./Bio.css";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaFacebookF,
  FaTiktok,
  FaEnvelope,
  FaChevronRight,
  FaBars,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaChartLine,
  FaClock,
  FaThumbsUp,
  FaPlay,
  FaPaperPlane,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const services = [
  { icon: <FaCode />, label: "Web Development" },
  { icon: <FaMobileAlt />, label: "Mobile Apps" },
  { icon: <FaCloud />, label: "Cloud Solutions" },
  { icon: <FaChartLine />, label: "Digital Marketing" },
];

const contacts = [
  {
    key: "whatsapp",
    label: "Chat on WhatsApp",
    value: "+252 62 827 6993",
    href: "https://wa.me/252628276993",
    className: "bio-row-whatsapp",
    icon: <FaWhatsapp />,
    badge: { icon: <span className="bio-badge-dot" />, text: "Fast Reply" },
  },
  {
    key: "call",
    label: "Call Us",
    value: "+061 827 6993",
    href: "tel:+252618276993",
    className: "bio-row-call",
    icon: <FaPhoneAlt />,
    badge: { icon: <FaClock />, text: "Mon - Sat 8AM - 8PM" },
  },
  {
    key: "facebook",
    label: "Follow on Facebook",
    value: "GalladTech Platforms",
    href: "https://www.facebook.com/share/1EKe5sca85/",
    className: "bio-row-facebook",
    icon: <FaFacebookF />,
    badge: { icon: <FaThumbsUp />, text: "Like Our Page" },
  },
  {
    key: "tiktok",
    label: "Follow on TikTok",
    value: "@gallad_tech_platforms",
    href: "https://www.tiktok.com/@gallad_tech_platforms",
    className: "bio-row-tiktok",
    icon: <FaTiktok />,
    badge: { icon: <FaPlay />, text: "Watch Videos" },
  },
  {
    key: "email",
    label: "Email Us",
    value: "galladtechplatforms@gmail.com",
    href: "mailto:galladtechplatforms@gmail.com",
    className: "bio-row-email",
    icon: <FaEnvelope />,
    badge: { icon: <FaPaperPlane />, text: "Send a Message" },
  },
];

const socials = [
  {
    key: "facebook",
    href: "https://www.facebook.com/share/1EKe5sca85/",
    className: "bio-social-facebook",
    icon: <FaFacebookF />,
  },
  {
    key: "tiktok",
    href: "https://www.tiktok.com/@gallad_tech_platforms",
    className: "bio-social-tiktok",
    icon: <FaTiktok />,
  },
  {
    key: "youtube",
    href: "https://www.youtube.com/@galladtech",
    className: "bio-social-youtube",
    icon: <FaYoutube />,
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/company/galladtech",
    className: "bio-social-linkedin",
    icon: <FaLinkedinIn />,
  },
  {
    key: "x",
    href: "https://x.com/galladtech",
    className: "bio-social-x",
    icon: <FaTwitter />,
  },
];

const stats = [
  { icon: <FaShieldAlt className="bio-stat-icon" />, label: "Trusted Solutions" },
  { icon: <FaUsers className="bio-stat-icon" />, label: "Happy Clients" },
  { icon: <FaChartLine className="bio-stat-icon" />, label: "Real Results" },
];

export default function Bio() {
  return (
    <div className="bio-page">
      <div className="bio-inner">
        <div className="bio-topbar">
          <div className="bio-brand">
            <img className="bio-brand-logo" src="/logo.png" alt="GalladTech" />
            <div className="bio-brand-text">
              <span className="bio-brand-name">
                GALLAD<span>TECH</span>
              </span>
              <span className="bio-brand-sub">IDEAS INTO REALITY</span>
            </div>
          </div>

          <Link to="/" className="bio-menu-btn">
            <FaBars /> Menu
          </Link>
        </div>

        <div className="bio-header">
          <div className="bio-mark">
            <img src="/logo.png" alt="GalladTech Platforms" />
          </div>

          <h1 className="bio-name">
            Gallad<span className="bio-name-accent">Tech</span>
          </h1>

          <p className="bio-tagline-small">
            TECH SOLUTIONS FOR A BETTER TOMORROW
          </p>

          <p className="bio-tagline">
            Reach us however works best for you — we usually reply within
            the hour. <span className="bio-emoji">⚡</span>
          </p>
        </div>

        <div className="bio-tags">
          {services.map((service) => (
            <div className="bio-tag" key={service.label}>
              <span className="bio-tag-icon">{service.icon}</span>
              <span>{service.label}</span>
            </div>
          ))}
        </div>

        <div className="bio-list">
          {contacts.map((contact) => (
            <a
              key={contact.key}
              className={`bio-row ${contact.className}`}
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="bio-icon">{contact.icon}</span>

              <span className="bio-row-body">
                <span className="bio-row-label">{contact.label}</span>
                <span className="bio-row-value">{contact.value}</span>
              </span>

              <FaChevronRight className="bio-chevron" />

              <span className="bio-badge">
                {contact.badge.icon}
                {contact.badge.text}
              </span>
            </a>
          ))}
        </div>

        <div className="bio-socials">
          {socials.map((social) => (
            <a
              key={social.key}
              className={`bio-social ${social.className}`}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="bio-footer">
          <div className="bio-footer-line">
            <Link to="/">galladtech.com</Link>
          </div>
        </div>

        <div className="bio-stats">
          {stats.map((stat) => (
            <div className="bio-stat" key={stat.label}>
              {stat.icon}
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <p className="bio-copyright">
          © 2025 GalladTech. All rights reserved.
          <br />
          Build • Innovate • Grow
        </p>
      </div>
    </div>
  );
}