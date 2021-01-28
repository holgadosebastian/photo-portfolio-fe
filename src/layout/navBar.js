import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

import Container from '../components/container'

const NavBar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="py-3">
      <Container
        className={classnames('flex', {
          'justify-center': isHome,
        })}
      >
        {!isHome && (
          <div className="flex-1">
            <Link to="/">Seb's Vignette</Link>
          </div>
        )}

        <div>
          <Link className="mx-2" to="/all-tags">
            Tags
          </Link>
          <Link className="mx-2" to="/all-collections">
            Collections
          </Link>
          <Link className="mx-2" to="/all-countries">
            Countries
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default NavBar
