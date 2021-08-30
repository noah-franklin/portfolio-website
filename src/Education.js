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

              <div>computer science</div>
              <div>suny new paltz</div>
              <div>class of 2021</div>
              <div className="awards">deans list: fall 2020, spring 2021</div>
            </div>

            <div className="col-5 orange text-end">
              {/* <h5 className="card-title">Special title treatment</h5> */}
              <div className="degree">
                <strong>A.S.</strong>
              </div>

              <div>computer science</div>
              <div>suny ulster</div>
              <div>class of 2019</div>
              <div className="awards">
                deans list: fall 2016, spring 2017, spring 2018, fall 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
