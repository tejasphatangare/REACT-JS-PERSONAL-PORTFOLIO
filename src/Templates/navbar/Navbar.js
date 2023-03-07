import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <>

<nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Tejas Phatangare</a>
    <button className="navbar-toggler border border-info" type="button" data-bs-toggle="offcanvas" data-bs-target="/offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Portfolio-Menu</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
     
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Blogs</a>
          </li>


          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Recent Projects</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Contact Us</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Feedback Us</a>
          </li>
        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Social Media +
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><a className="dropdown-item" href="/">LinkedIn</a></li>
              <li><a className="dropdown-item" href="/">GitHub</a></li>
              <li><a className="dropdown-item" href="/">Twitter</a></li>
              <li><a className="dropdown-item" href="/">Instagram</a></li>
              <li><a className="dropdown-item" href="/">Whatsapp</a></li>
              
            </ul>
          </li>
          
        </ul>
        <form className="d-flex mt-2" role="search">
          <input className="form-control me-2 border border-danger" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>



        <section className="home" id="home">
          <div id="particles-js"></div>
          <div className="content">
            <img className="tilt" src="Tejas Circle Image.png" alt="profile" />
            <h3>
              {" "}
              Phatangare <span>Tejas</span>{" "}
            </h3>
            <p>
              {" "}
              i am a <span className="typing-text"> front end developer </span>{" "}
            </p>
            <a href="/about" className="btnimg">
              about me
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default Navbar;
