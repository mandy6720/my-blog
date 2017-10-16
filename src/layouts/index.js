import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'
import Nav from '../components/Nav'

import { rhythm, scale } from '../utils/typography'

import '../css/index.scss'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    console.log('props', this.props)

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    
    header = (
      <div id='header'>
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: rhythm(1.5),
            background: '#fff'
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Old Town for Millenials
          </Link>
        </h1>
        <Nav />
      </div>
    )
    
    return (
      
      <Container
        style={{
          background: '#fff',
          maxWidth: rhythm(24),
        }}
      >
        {header}
        {children()}
      </Container>
      
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
