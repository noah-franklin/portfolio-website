// import galaxy from "./assets/1876.jpg";
import "./About.css";

function About(props) {
  return (
    <div
      className="container-fluid text-light p-0 aboutContain"
      id={props.spy}
    >
      <div className="card text-center">
        <div className="card-header">about</div>
        <div className="divider"></div>
        <div className="card-body">
          {/* <h5 className="card-title">Special title treatment</h5> */}
          <p className="card-text my-3 w-75 m-auto">
            Ever since my first programming class in high school I've enjoyed
            coding. Constantly learning new technologies to create new and
            useful applications is just a fun and rewarding process. My current
            focus is on front-end development with hopes to become a full-stack
            engineer. When I'm not
            coding I like to go on hikes, runs, basically anything outdoors.
          </p>
          <div className="moreInfoItems col-auto">
            <i class="bi bi-house-fill"></i>
            <span
              style={{
                fontSize: "12px",
                marginLeft: "1em",
                marginBottom: "0em",
              }}
            >
              Kingston, NY
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
