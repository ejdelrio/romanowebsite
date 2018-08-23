import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_banner.scss';

class Banner extends Component
{
  constructor(props)
  {
    super(props);


  }

  render()
  {
    console.log(Link);
    return(
      <div id={ "banner" }>
        <h1>Tucker Landscaping</h1>
        <nav>
          <ul>
            <li><Link to='/home'>Home</ Link></ li>
            <li><Link to='/about'>About</ Link></ li>
            <li><Link to='/services'>Services</ Link></ li>
            <li><Link to='/gallery'>Gallery</ Link></ li>
            <li><Link to='/contact'>Contact</ Link></ li>
          </ul>
        </nav>
      </div>
    )

  }
}

export default Banner;
