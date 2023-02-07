import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <a className="navbar-brand" href="/">Future News</a>
                    <a className="navbar-brand new-page-link " href="/">Home</a>
                    <a className="navbar-brand new-page-link " href="/about">About</a>
                </div>
                <div className="form-check form-switch text-white">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                </div>
            </div>

        </nav>
      </div>
    )
  }
}

export default Navbar
