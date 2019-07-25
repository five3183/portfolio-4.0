import React, { Component } from 'react'
import './Home.css';

import resume from '../../assets/images/resume.pdf'

export default class Home extends Component {
  render() {
    return (
      <div className="container text-center" id="landing">
        <h1>Matthew Curran</h1>
        <h4>Full Stack Developer</h4>
        <div className="row text-left justify-content-center mt-3">
          <div className="col-6 mt-5">
            <p>Ensuring the job is done right the first time by working smart and hard. Be adaptable as you never know what to expect.  Regardless of what you are doing, maintain integrity.</p>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <span>
            <a href="https://github.com/five3183">
              <i className="fab fa-github-square"></i>
            </a>
          </span>
        </div>
        <div className="mt-5" id="resume">
          <span className="resume"><a href={resume}>RESUME</a></span>
        </div>
      </div>
    )
  }
}
