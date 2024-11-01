import headshot from "../assets/images/headshot.png";

export default function About() {
  const handlePopup = () => {
    alert("Eventually, this button will open a blog.");
  };

  const handleGallery = () => {
    alert("Eventually, this button will open a gallery.");
  };

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
          <button className="btn" onClick={handlePopup}>
            My Blog
          </button>
          <button className="btn" onClick={handleGallery}>
            Gallery
          </button>
        </div>
      </div>
    </div>
  );
}
