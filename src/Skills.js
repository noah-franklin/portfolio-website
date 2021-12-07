// import galaxy from "./assets/1876.jpg";
import "./Skills.css";

function Skills(props) {
  return (
    <div
      className="container-fluid text-light p-0 skillsContain"
      id={props.spy}
    >
      <div className="card text-center educationCard">
        <div className="card-header mt-0">skills</div>
        <div className="divider"></div>

        <div class="container skills">
          <div class="row mt-5">
            <div class="col">
              <span class="align-middle">Proficient</span>
            </div>
            <div
              class="col"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="html5"
            >
              <i class="devicon-html5-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-css3-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-javascript-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-git-plain colored fs-1"></i>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col">
              <span class="align-middle">Familiar</span>
            </div>
            <div class="col">
              <i class="devicon-react-original colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-bootstrap-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-figma-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-mysql-plain colored fs-1"></i>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col">
              <span class="align-middle">Basic</span>
            </div>
            <div class="col">
              <i class="devicon-python-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-vuejs-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-nodejs-plain colored fs-1"></i>
            </div>
            <div class="col">
              <i class="devicon-java-plain colored fs-1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
