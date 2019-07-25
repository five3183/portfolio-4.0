import React, { Component } from 'react'
import './Projects.css'

import ggImg from '../../assets/images/psychic-game.png'
import ccImg from '../../assets/images/crystal-collector.png'
import wdImg from '../../assets/images/trivia-game.png'
import gifImg from '../../assets/images/giphy-api.png'
import bamImg from '../../assets/images/bamazon.png'
import ffImg from '../../assets/images/friend-finder.png'
import ebImg from '../../assets/images/eat-da-burger.png'
import lcImg from '../../assets/images/loan-calculator.png'
import cgImg from '../../assets/images/clicky-game.png'
import kkImg from '../../assets/images/crypto-cronies.png'
import nopeImg from '../../assets/images/nope.png'
import ppImg from '../../assets/images/ppp.png'

export default class Projects extends Component {
  render() {
    return (
      <div className="container mb-5" id="projects">
        <h1 className="text-center">Projects</h1>
        <div className="row justify-content-center mt-5">
          <div className="project">
            <img src={ggImg} />
            <div className="overlay text-center">
              <h5>Letter guessing game in JavaScript.</h5>
              <div>
                <a href="https://five3183.github.io/Psychic-Game/" className="mt-5">Play it here</a>
                <a href="https://github.com/five3183/Psychic-Game" >See code here</a>
              </div> 
            </div>
          </div>
          <div className="project">
              <img src={ccImg} />
              <div className="overlay text-center">
                <h5>Number matching game in JavaScript.</h5>
                <div>
                  <a href="https://five3183.github.io/crystal-collector/" className="mt-5">Play it here</a>
                  <a href="https://github.com/five3183/crystal-collector" >See code here</a>
                </div>
              </div>
          </div>
          <div className="project">
              <img src={wdImg} />
              <div className="overlay text-center">
                <h5>Walking Dead Trivia Game in JavaScript.</h5>
                <div>
                  <a href="https://five3183.github.io/triviagame/" className="mt-5">Play it here</a>
                  <a href="https://github.com/five3183/triviagame" >See code here</a>
                </div>
              </div>
          </div>
          <div className="project">
            <img src={gifImg} />
            <div className="overlay text-center">
              <h5>Add gifs with Giphy API and JavaScript.</h5>
              <div>
                <a href="https://five3183.github.io/giphypage/" className="mt-5">Try it here</a>
                <a href="https://github.com/five3183/giphypage" >See code here</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={bamImg} />
            <div className="overlay text-center">
              <h5>Inventory app in Node.js.</h5>
              <div>
                <a href="https://github.com/five3183/BAMAZON" className="mt-5">See code here</a>
              </div>
            </div>
          </div>
          <div className="project">
            <img src={ffImg} />
            <div className="overlay text-center">
              <h5>Friend finder app in node.js and express.</h5>
              <div>
                <a href="https://gentle-peak-54234.herokuapp.com/" className="mt-5">Try it here</a>
                <a href="https://github.com/five3183/FriendFinder" >See code here</a>
              </div>
            </div>
          </div>
          <div className="project">
               <img src={ebImg} />
               <div className="overlay text-center">
                  <h5>Add burders to a list and eat them.  Built with Handlebars, Node.js and MySQL.</h5>
                  <div>
                     <a href="https://serene-badlands-56706.herokuapp.com/" className="mt-5">Try it here</a>
                     <a href="https://github.com/five3183/burger" >See code here</a>
                  </div>
               </div>
            </div>
            <div className="project">
               <img src={lcImg} />
               <div className="overlay text-center">
                  <h5>Loan calculator using JavaScript.</h5>
                  <div>
                     <a href="https://five3183.github.io/LoanCalculator/" className="mt-5">Try it here</a>
                     <a href="https://github.com/five3183/LoanCalculator" >See code here</a>
                  </div>
               </div>
            </div>
            <div className="project">
              <img src={cgImg} />
              <div className="overlay text-center">
                <h5>A minion memory game in React.js</h5>
                <div>
                    <a href="https://calm-bastion-93483.herokuapp.com/" className="mt-5">Play it here</a>
                    <a href="https://github.com/five3183/clicky">See code here</a>
                </div>
              </div>
            </div>
            <div className="project">
              <img src={kkImg} />
              <div className="overlay text-center">
                <h5>Multipage app that tracks cryptocurrencies. Firebase is used for the database</h5>
                <div>
                    <a href="https://five3183.github.io/CryptoCurrencyApp/" className="mt-5">Try it here</a>
                    <a href="https://github.com/five3183/CryptoCurrencyApp">See code here</a>
                </div>
              </div>
            </div>
            <div className="project">
              <img src={nopeImg} />
              <div className="overlay text-center">
                <h5>Multipage app with node.js and mongo. Rate resturants and see if they are busy.</h5>
                <div>
                    <a href="https://frozen-plateau-24963.herokuapp.com/" className="mt-5">Try it here</a>
                    <a href="https://github.com/five3183/NOPE2.0" >See code here</a>
                </div>
              </div>
            </div>
            <div className="project">
              <img src={ppImg} />
              <div className="overlay text-center">
                <h5>MERN stack app that tracks perscriptions and sends text message reminders.</h5>
                <div>
                  <a href="https://presonal-prescription-planner.herokuapp.com/" className="mt-5" title="This is a free version of twilio and will only send messages to validated phone numbers." class="mt-5">Try it here</a>
                  <a href="https://github.com/taw1313/team-merge-p3" >See code here</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
  }
}
