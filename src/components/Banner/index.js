import React, { Component } from 'React';
import './_banner.scss';

class Banner extends Component
{
  constructor(props)
  {
    super(props);

    this.state = 
    {
    }
  }

  render()
  {
    return(
      <div id={ "banner" }>
        <h1>Tucker Landscaping</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Gallery</li>
            <li>Services</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    )

  }
}

export default Banner;
