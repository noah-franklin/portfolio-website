import "./Projects.css";
import smart from "./assets/homestack.png";
import portfolio from "./assets/portfolio.png";
import exercise from "./assets/exercise.png";
function Projects(props) {
  return (
    <div
      className="container-fluid text-light p-0 skillsContain"
      id={props.spy}
    >
      <div className="card text-center projectsCard p-0">
        <div className="card-header">projects</div>
        <div className="divider"></div>

        <div class="container mt-0">
          <div class="row">
            <div class="col px-0 mb-5">
              <div class="card bingo px-5 py-5">
                <a
                  href="http://cs.newpaltz.edu/p/s21-01/smart-library/"
                  target="_blank"
                >
                  <img
                    src={smart}
                    id="smart"
                    class="card-img-top"
                    alt="..."
                  ></img>
                </a>
                <div class="card-body">
                  <p class="card-text">Smart Library</p>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card bingo px-5 py-5">
                <a href="nfranklin.com">
                  <img src={portfolio} class="card-img-top" alt="..."></img>
                </a>
                <div class="card-body">
                  <p class="card-text">Portfolio Website</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card bingo px-0 py-5">
                <a
                  href="https://exercise-app-client-2020.herokuapp.com"
                  target="_blank"
                >
                  <img src={exercise} class="card-img-top" alt="..."></img>
                </a>
                <div class="card-body">
                  <p class="card-text">Exercise Tracker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
