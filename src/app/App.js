import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
      <Router>
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
            </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      );

/*     <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
}

export default App;
