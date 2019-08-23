import React from 'react';
import './App.css';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Resume from './Pages/Resume/Resume';

const App: React.FC = () => {
  return (
    <Router>
        <nav>
          <Link to={'/'}> Resume </Link>
          <Link to={'/about'}> About </Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Resume} />
          <Route exact path='/about' component={About} />
        </Switch>
    </Router>
  );
}

export default App;
