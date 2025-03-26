import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src="/src/assets/NewsSphere.png" alt="" width="50" height="50" className="d-inline-block align-text-top" />
            </a>
            <a className="navbar-brand" href="/">NewsSphere</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link" href="/">Link</a>
                </li> */}
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-light" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
