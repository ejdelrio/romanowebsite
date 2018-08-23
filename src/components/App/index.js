import React, { Component } from 'react';

import Banner from '../Banner';
import './_app.scss';

class App extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <Banner />
    )
  }
}

export default App;
