import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark" id="footer">
        <div className="row justify-content-center">
          <h6 className="mt-3">&copy; Matthew Curran 2019
            <p className="text-center">All Rights Reserved</p>
          </h6>
        </div>
      </div>
    )
  }
}
