import React from 'react'
import { Link } from 'react-router-dom'

import Container from '../components/container'

const NavBar = () => {
  return (
    <div className="py-3">
      <Container className="flex">
        <div className="flex-1">
          <Link to="/">
            Seb's Vignette
          </Link>
        </div>
        <div>
          <Link className="mx-2" to="/all-tags">
            Tags
          </Link>
          <Link className="mx-2" to="/all-collections">
            Collections
          </Link>
        </div>
      </Container>
      
    </div>
  )
}

export default NavBar
