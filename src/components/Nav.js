import React from 'react'
import Link from 'gatsby-link'

import { rhythm } from '../utils/typography'

class Nav extends React.Component {
  render() {
    return (
      <div id="navbar">
        <ul className="links">
          <li><Link to={'/'}>home</Link></li>
          <li><Link to={'/about'}>about</Link></li>
          <li><Link to={'/about'}>contact</Link></li>
          <li><Link to={'/about'}>topics</Link></li>
          <li><Link to={'/about'}>blogroll</Link></li>
        </ul>
      </div>
    )
  }
}

export default Nav
