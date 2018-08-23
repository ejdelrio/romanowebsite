import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { HashRouter, IndexRoute } from 'react-router-dom';

import App from '../App';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Gallery from '../Gallery';
import Contact from '../Contact';

class AppRouter extends Component
{
  render()
  {
    return(
      <HashRouter>
        <section>
          <Route path='/' component={ App } />
          <Route path='/home' component={ Home } />
          <Route path='/services' component={ Services } />
          <Route path='/about' component={ About } />
          <Route path='/gallery' component={ Gallery } />
          <Route path='/contact' component={ Contact } />
        </section>
      </ HashRouter>
    );
  }
}

export default AppRouter;