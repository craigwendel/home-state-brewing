import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurBeersPage from './pages/OurBeersPage';
import SingleBeer from './components/SingleBeer';
import AgeVerification from './components/AgeVerification';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AgeVerification} />
        <Route exact path="/XaeA-12" component={Home} />
        <Route exact path="/XaeA-12/our-beers" component={OurBeersPage} />
        <Route path="/XaeA-12/our-beers/:beer" component={SingleBeer} />
        <Route path="/XaeA-12/about" component={About} />
      </Switch>
    </Router>
  );
}
