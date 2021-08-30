// import galaxy from "./assets/1876.jpg";
import "./Skills.css";

function Skills(props) {
  return (
    <div className="container-fluid text-light p-0 aboutContain" id={props.spy}>
      <div className="card text-center educationCard">
        <div className="card-header">skills</div>
        <div className="divider"></div>

        <div class="container degree mt-3">
          <i class="devicon-react-original-wordmark"></i>
        </div>
      </div>
    </div>
  );
}

export default Skills;
