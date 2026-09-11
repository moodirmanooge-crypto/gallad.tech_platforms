import "./Trusted.css";
import SlideUp from "../animations/SlideUp";

import {
  FaReact,
  FaNodeJs,
  FaGoogle,
  FaRobot,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiMysql,
  SiFigma,
} from "react-icons/si";

function Trusted() {

  const logos = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <FaGoogle />, name: "Google" },
    { icon: <FaRobot />, name: "OpenAI" },
    { icon: <SiFigma />, name: "Figma" },
  ];

  return (
    <section className="trusted">
      <SlideUp>
        <h3>Trusted Technologies</h3>
      </SlideUp>

      <div className="marquee">
        <div className="track">
          {logos.concat(logos).map((item, index) => (
            <div className="logo-card" key={index}>
              <div className="logo-icon">
                {item.icon}
              </div>

              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trusted;