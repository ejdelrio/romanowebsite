import React, { Component } from 'react';

import Banner from '../Banner';
import './_app.scss';

class App extends React.Component
{
  render()
  {
    return(
      <section>
        <Banner />
      </section>
    )
  }
}

export default App;