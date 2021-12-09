import React from "react";
import "./Contact.css";

class Contact extends React.Component {
  state = {
    isActive: false,
  };

  handleShow = () => {
    this.setState({
      isActive: true,
    });
  };

  handleHide = () => {
    this.setState({
      isActive: false,
    });
  };
  render() {
    return (
      <div
        className="container-fluid text-light p-0 contactContain"
        id={this.props.spy}
      >
        <div className="card text-center projectsCard please p-0">
          {/* <div className="card-header">contact</div>
        <div className="divider"></div>  */}

          {!this.state.isActive ? (
            <button
              id="contactbtn"
              type="button"
              class="btn btn-primary"
              onClick={this.handleShow}
            >
              contact me
            </button>
          ) : null}
          {this.state.isActive ? (
            <div class="container mt-5">
              <div class="row">
                <a href="mailto:noah6198@aol.com">
                  <div class="col">noah6198@aol.com</div>
                </a>
              </div>
              <div class="row">
                <div class="col">845-616-1511</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Contact;
