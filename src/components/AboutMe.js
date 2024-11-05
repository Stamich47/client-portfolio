import headshot from "../assets/images/headshot.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div id="home" className="about-section">
      <img src={headshot} alt="Briana" className="img" />
      <div className="content">
        <h2 className="header-style">Hi, I'm Briana.</h2>
        <p>
          I'm a graphic designer with a passion for creating stunning visuals. I
          love art and constantly seek to improve my skills.
        </p>
        <p>
          In my free time, I explore new design trends and work on personal
          projects. I'm eager to collaborate and grow as a designer.
        </p>
        <div className="d-flex gap-2">
          <Link to="/blog">
            <button className="btn">My Blog</button>
          </Link>
          <Link to="/gallery">
            <button className="btn">Gallery</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
