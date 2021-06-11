import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Calc1 from './pages/Calc1';
import Calc2 from './pages/Calc2';
import Calc3 from './pages/Calc3';
import Calc4 from './pages/Calc4';
import Calc5 from './pages/Calc5';
import './styles/all.scss';
export default function App() {

  
  document.body.style.backgroundColor = '#a2d5e9'
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/"  exact component={Home}></Route>
        <Route
          path="/about"
          exact
          component={About}
        ></Route>
        <Route
          path="/Limits"
          exact
          component={Calc1}
        ></Route>
        <Route
          path="/Differentiation"
    
          exact
          component={Calc2}
        ></Route>
        <Route
          path="/Integration"
          exact
          component={Calc3}
        ></Route>
        <Route
          path="/ApplicationOfIntegration"
          exact
          component={Calc4}
        ></Route>
        <Route
          path="/DifferentialEquations"
          exact
          component={Calc5}
        ></Route>
      </Switch>
    </Router>
  );
}
