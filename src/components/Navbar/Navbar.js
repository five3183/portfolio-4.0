import React, { Component } from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'


export default class Navbar extends Component {
  render() {

    const toggleMenu = (e) => {
			e.preventDefault()
			const navbarMenu = document.getElementById('navbar-menu')
			navbarMenu.classList.forEach(token => {
				if (token === 'show'){
					navbarMenu.classList.remove('show')
				}
				else {
					navbarMenu.classList.add('show')
				}
			});
		}

		const collapseMenu = (e) => {
			e.preventDefault()
			const navbarMenu = document.getElementById('navbar-menu')
			navbarMenu.classList.remove('show')
		}

    return (
      <div className="container-fluid" id="nav-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button id="toggler" className="navbar-toggler" aria-expanded="false" aria-controls="navbarColor02" aria-label="Toggle navigation" type="button" data-target="#navbarColor02" data-toggle="collapse" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav ml-auto">
          <li className="nav-item" onClick={collapseMenu}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={collapseMenu}>
            <Link className="nav-link"  to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item" onClick={collapseMenu}>
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item" onClick={collapseMenu}>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      </nav>
   </div>

    )
  }
}
