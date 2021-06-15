import "./NavBar.css"
function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark" id="navbar-example2">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          
            <ul className="nav nav-pills m-auto justify-content-center">
              <li className="nav-item mx-5 p-2">
                <a className="nav-link active text-light" href="#scrollspyHeading1">About Me</a>
              </li>
              <li className="nav-item mx-5 p-2">
                <a className="nav-link text-light" href="#scrollspyHeading2">Projects</a>
              </li>
              <li className="nav-item mx-5 p-2">
                <a className="nav-link text-light" href="#scrollspyHeading3">Contact</a>
              </li>
              
            </ul>
        </div>
      </div>
    </nav>
  

  );
}

export default NavBar;
