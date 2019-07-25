import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App bg-dark">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/skills" component = {Skills} />
          <Route exact path="/projects" component = {Projects} />
          <Route exact path="/contact" component = {Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
