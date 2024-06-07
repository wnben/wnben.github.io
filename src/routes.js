// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Gallery from './pages/Gallery';
import TheWedding from './pages/TheWedding';
import GalleryComponent from './components/GalleryComponent';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/our-story" component={OurStory} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/gallery/:galleryName" component={GalleryComponent} />
        <Route path="/the-wedding" component={TheWedding} />
      </Switch>
    </Router>
  );
};

export default Routes;
