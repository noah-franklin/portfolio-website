import About from "./About";
import NavBar from "./NavBar";

function Body() {
  return (
    <div
      className="position-relative main"
      style={{ height: "100vh", scrollBehavior: "smooth", overflowY: "scroll" }}
    >
      <NavBar></NavBar>
      <About spy="about"></About>
      <About spy="education"></About>
      <About spy="skills"></About>
      <About spy="projects"></About>
      <About spy="contact"></About>
    </div>
  );
}

export default Body;
