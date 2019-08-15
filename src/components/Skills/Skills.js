import React, { Component } from 'react'

import './Skills.css'

export default class Skills extends Component {
  render() {
    return (
      <div className="container text-center" id="landing">
        <div className="row justify-content-center">
          <h2>Coding Skills</h2>
        </div>
        <hr></hr>
        <div className="row justify-content-center mt-5 skills-list">
          <ul className="list-group list-group-horizontal languages">
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
          </ul>
        </div>
        <div className="row justify-content-center mt-3 skills-list">
          <ul className="list-group list-group-horizontal cheat-codes">
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">SASS</li>
            <li className="list-group-item">SCSS</li>
          </ul>
        </div>
        < div className="row justify-content-center mt-3 skills-list">
          <ul className="list-group list-group-horizontal front-frameworks">
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Materialize</li>
          </ul>
        </div>
        <div className="row justify-content-center mt-3 skills-list"> 
          <ul className="list-group list-group-horizontal back-frameworks">
            <li className="list-group-item">Node.js</li>
            <li className="list-group-item">Express</li>
          </ul>
        </div>
        <div className="row justify-content-center mt-3 skills-list">
          <ul className="list-group list-group-horizontal database">
            <li className="list-group-item">MySQL</li>
            <li className="list-group-item">MongoDB</li>
          </ul>
        </div>
        <div className="row justify-content-center mt-3 skills-list">
          <ul className="list-group list-group-horizontal js-library">
            <li className="list-group-item">React</li>
            <li className="list-group-item">Angular</li>
            <li className="list-group-item">Handlebars</li>
          </ul>
        </div>
      </div>
    )
  }
}
