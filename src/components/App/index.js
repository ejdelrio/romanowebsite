import React, { Component } from 'react';

import './_app.scss';
import Banner from '../Banner';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Gallery from '../Gallery';
import Contact from '../Contact';

class App extends Component
{
  render()
  {
    return(
      <section>
        <Banner />
        <Home />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </section>
    );
  }
}

export default App;