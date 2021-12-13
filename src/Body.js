import About from "./About";
import Education from "./Education";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function Body() {
  return (
    <div
      className="position-relative main"
      style={{ height: "100vh", scrollBehavior: "smooth", overflowY: "scroll" }}
    >
      <NavBar></NavBar>
      <Welcome spy="welcome"></Welcome>
      <About spy="about"></About>
      <Education spy="education"></Education>
      <Skills spy="skills"></Skills>
      <Projects spy="projects"></Projects>
      <Contact spy="contacts"></Contact>
    </div>
  );
}

export default Body;