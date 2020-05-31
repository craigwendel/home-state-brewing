import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import OurBeersPage from './pages/OurBeersPage';
import SingleBeerPage from './pages/SingleBeerPage';
import AgeVerification from './components/AgeVerification';
import OurCommunity from './pages/OurCommunity';
import OurBrewery from './pages/OurBrewery';
import OurTeam from './pages/OurTeam';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AgeVerification} />
        <Route exact path="/XaeA-12" component={Home} />
        <Route exact path="/XaeA-12/our-beers" component={OurBeersPage} />
        <Route path="/XaeA-12/our-beers/:beer" component={SingleBeerPage} />
        <Route path="/XaeA-12/about-us" component={About} />
        <Route path="/XaeA-12/our-community" component={OurCommunity} />
        <Route path="/XaeA-12/our-brewery" component={OurBrewery} />
        <Route path="/XaeA-12/our-team" component={OurTeam} />
      </Switch>
    </Router>
  );
}
