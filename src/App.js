import React, { useState } from 'react';
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
  const [darkmode, setDarkmode] = useState(true);

  document.body.style.backgroundColor = darkmode
    ? '#a2d5e9'
    : 'rgb(125, 125, 125)';
  return (
    <Router>
      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
      <Switch>
        <Route path="/"  exact component={Home}></Route>
        <Route
          path="/about"
          exact
          component={About}
        ></Route>
        <Route
          path="/calc1"
          exact
          component={Calc1}
        ></Route>
        <Route
          path="/calc2"
    
          exact
          component={Calc2}
        ></Route>
        <Route
          path="/calc3"
          exact
          component={Calc3}
        ></Route>
        <Route
          path="/calc4"
          exact
          component={Calc4}
        ></Route>
        <Route
          path="/calc5"
          exact
          component={Calc5}
        ></Route>
      </Switch>
    </Router>
  );
}
