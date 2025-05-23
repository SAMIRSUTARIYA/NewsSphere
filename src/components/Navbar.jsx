import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-0 border-bottom">
          <div className="container-fluid ps-md-5 pe-md-5">

            <a className="navbar-brand" href="/">
              <img src="/src/assets/NewsSphere.png" alt="Logo" width="55" height="55" className="d-inline-block align-text-top rounded-circle" />
            </a>
            <a className="navbar-brand fs-3 mb-0 h5" href="/">News-Sphere</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
