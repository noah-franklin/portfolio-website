// import galaxy from "./assets/1876.jpg";
import "./About.css";

function About(props) {
  return (
    <div
      className="container-fluid bg-dark text-light p-0 aboutContain"
      id={props.spy}
    >
      <div className="rocket animate__animated animate__fadeInLeft">
        <h5 style={{ fontSize: "80px" }}>
          Hello :), my name is <span className="green">Noah Franklin</span>
        </h5>
        <p style={{ fontSize: "30px" }}>
          I'm a recent Computer Science Graduate looking for web development
          opportunities
        </p>
        <p style={{ fontSize: "15px" }}>Kingston, NY</p>
      </div>
    </div>
  );
}

export default About;
