import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurBeersPage from './pages/OurBeersPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/our-beers" component={OurBeersPage} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
