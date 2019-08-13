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
}

export default App;
