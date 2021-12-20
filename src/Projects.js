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

        <div class="container mt-5">
          <div class="row justify-content-around">
            <div class="col px-0 mb-5">
              <div class="card bingo py-4">
                <p class="card-text mb-3">Smart Library</p>
                <a
                  href="http://cs.newpaltz.edu/p/s21-01/smart-library/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={smart}
                    id="smart"
                    class="card-img-top"
                    alt="..."
                  ></img>
                </a>
                <div class="card-body">
                  <p class="card-text description">
                    Exercised leadership over a small team to develop a virtual
                    library experience
                  </p>
                </div>
              </div>
            </div>

            <div class="col mb-5">
              <div class="card bingo py-4">
                <p class="card-text mb-3">Portfolio Website</p>
                <a href="#welcome">
                  <img src={portfolio} class="card-img-top" alt="..."></img>
                </a>
                <div class="card-body">
                  <p class="card-text description">
                    Built a portfolio website to display my resume and showcase
                    my projects
                  </p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card bingo py-4">
                <p class="card-text mb-3">Exercise Tracker</p>
                <a
                  href="https://exercise-app-client-2020.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={exercise} class="card-img-top" alt="..."></img>
                </a>
                <div class="card-body">
                  <p class="card-text description">
                    Assembled a Full-Stack Exercise Tracker with admin
                    functionality
                  </p>
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
