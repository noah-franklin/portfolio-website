// import galaxy from "./assets/1876.jpg";
import "./Education.css";

function Education(props) {
  return (
    <div className="container-fluid text-light p-0 aboutContain" id={props.spy}>
      <div className="card text-center educationCard">
        <div className="card-header">education</div>
        <div className="divider"></div>

        <div class="container degree mt-3">
          <div className="row justify-content-around">
            <div className="col-5 orange text-start">
              {/* <h5 className="card-title">Special title treatment</h5> */}
              <div className="degree ">
                <strong>B.S.</strong>
              </div>

              <div>Computer Science</div>
              <div>SUNY New Paltz</div>
              <div>Class of May 2021</div>
              <div className="awards">Deans list: Fall 2020, Spring 2021</div>
            </div>

            <div className="col-5 orange text-end">
              {/* <h5 className="card-title">Special title treatment</h5> */}
              <div className="degree">
                <strong>A.S.</strong>
              </div>
          
              <div>Computer Science</div>
              <div>SUNY Ulster</div>
              <div>Class of May 2019</div>
              <div className="awards">
                Deans list: Fall 2016, Spring 2017, Spring 2018, Fall 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
