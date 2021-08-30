// import galaxy from "./assets/1876.jpg";
import "./Welcome.css";

function Welcome(props) {
  return (
    <div
      className="container-fluid text-light p-0 welcomeContain"
      id={props.spy}
    >
      <div className="animate__animated animate__fadeInLeft info">
        <h5 style={{ fontSize: "32px" }}>
          <span className="lightBlue">noah franklin</span>
        </h5>
        <p style={{ fontSize: "16px" }}>
          recent computer science graduate looking for web development
          opportunities
        </p>

        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="moreInfoItems col-auto">
              <i class="bi bi-file-earmark-person-fill"></i>
              <span
                style={{
                  fontSize: "12px",
                  marginLeft: "1em",
                  marginBottom: "1em",
                }}
              >
                resume.pdf
              </span>
            </div>
            <div className="moreInfoItems col-auto">
              <a
                href="https://github.com/noah-franklin"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github"></i>
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "1em",
                    marginBottom: "1em",
                  }}
                >
                  noah-franklin
                </span>
              </a>
            </div>
            <div className="col-auto">
              <a
                href="https://www.linkedin.com/in/noah-franklin/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin"></i>
                <span
                  style={{
                    fontSize: "12px",
                    marginLeft: "1em",
                    marginBottom: "1em",
                  }}
                >
                  noah-franklin
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* <img src={noah} alt="Noah Franklin"></img> */}
      </div>
    </div>
  );
}

export default Welcome;
