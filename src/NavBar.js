import "./NavBar.css";
import React from "react";
class NavBar extends React.Component {
  changeActive(ele) {
    const about = document.querySelectorAll('[href="#about"]');
    const education = document.querySelectorAll('[href="#education"]');
    const skills = document.querySelectorAll('[href="#skills"]');
    const projects = document.querySelectorAll('[href="#projects"]');
    const contact = document.querySelectorAll('[href="#contact"]');

    const navArray = [
      about[0],
      education[0],
      skills[0],
      projects[0],
      contact[0],
    ];

    navArray.forEach((navLink) => {
      if (ele === navLink.href) {
        console.log(navLink);
      } else {
        console.log("no");
      }
    });
  }
  render() {
    return (
      <nav
        className="navbar sticky-top navbar-expand-xl navbar-dark position-fixed w-100"
        id="navbar-example2"
      >
        <div className="container-fluid mx-auto">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="nav nav-pills m-auto justify-content-center p-3">
              <li className="nav-item mx-5 p-1">
                <a
                  className="nav-link text-light"
                  href="#about"
                  onClick={this.changeActive}
                >
                  About Me
                </a>
              </li>
              <li className="nav-item mx-5 p-1">
                <a
                  className="nav-link text-light"
                  href="#education"
                  onClick={this.changeActive}
                >
                  Education
                </a>
              </li>

              <li className="nav-item mx-5 p-1">
                <a
                  className="nav-link text-light"
                  href="#skills"
                  onClick={this.changeActive}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item mx-5 p-1">
                <a
                  className="nav-link text-light"
                  href="#projects"
                  onClick={this.changeActive}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item mx-5 p-1">
                <a
                  className="nav-link text-light"
                  href="#contact"
                  onClick={this.changeActive}
                >
                  Contact
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
