import "./NavBar.css";
import React from "react";
class NavBar extends React.Component {
  changeIcon() {
    let ele = document.getElementById("navIcon")
    console.log(ele.classList.contains("bi-list"));
    if(ele.classList.contains("bi-list")) {
      ele.classList.remove("bi-list");
      ele.classList.add("bi-x")
    }
    else {
      ele.classList.remove("bi-x");
      ele.classList.add("bi-list")

    }

    
  }
  render() {
    return (
      <nav
        className="navbar navbar-light sticky-top navbar-expand-xl position-fixed w-100"
        id="navbar-example2"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={this.changeIcon}
            
          >
            <i className="bi bi-list" id="navIcon"></i>
     
          </button>
          <div
            className="collapse navbar-collapse me-auto justify-content-end"
            id="navbarNavAltMarkup"
          >
            <ul className="nav nav-pills p-1">
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#welcome"
                  
                >
                  welcome
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#about"
                 
                >
                  about
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#education"
                 
                >
                  education
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#skills"
                  
                >
                  skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#projects"
               
                >
                  projects
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#contact"
           
                >
                  contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
