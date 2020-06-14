import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurBeersPage from './pages/OurBeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import OurCommunity from './pages/OurCommunity';
import OurBrewery from './pages/OurBrewery';
import OurTeam from './pages/OurTeam';
import ComingSoon from './components/ComingSoon';
import ErrorPage from './pages/ErrorPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ComingSoon} />
        <Route exact path="/XaeA-12" component={Home} />
        <Route exact path="/XaeA-12/our-beers" component={OurBeersPage} />
        <Route path="/XaeA-12/our-beers/:beer" component={SingleBeerPage} />
        <Route path="/XaeA-12/our-story" component={About} />
        <Route path="/XaeA-12/our-community" component={OurCommunity} />
        <Route path="/XaeA-12/our-brewery" component={OurBrewery} />
        <Route path="/XaeA-12/our-team" component={OurTeam} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}
