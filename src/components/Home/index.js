import React, { Component } from 'react';

import "./_home.scss";

class Home extends Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
      <section id={ "home" }>
        <h1>Home Page Here</h1>
      </section>
    )
  }
}

export default Home;