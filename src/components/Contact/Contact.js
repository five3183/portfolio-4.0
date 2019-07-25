import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <div className="container" id="landing">
        <div className="row justify-content-center">
          <h1>Email Me</h1>
        </div>
        <div className="row justify-content-center mt-3">
          <p>Currently I am looking for my first role as a developer.</p>
        </div>
        <div className="row justify-content-center mt-5">
          <a href="mailto:five3183@gmail.com"><i className="fa fa-envelope mail-icon" aria-hidden="true"></i></a>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <span id="email">FIVE3183@GMAIL.COM</span>
        </div>

      </div>
    )
  }
}
