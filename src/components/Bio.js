import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from '../assets/me.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Amanda Hewitt`}
          style={{
            float: 'left',
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        Written by <strong>Amanda Bozzi</strong> who lives in Old Town Alexandria and works in DC building useful and pretty things.{' '}
        <a href="https://twitter.com/apiamanda">
          You should follow her on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
