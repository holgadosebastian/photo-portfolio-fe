import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import Picture from '../picture'
import Hdn from '../heading'
import Container from '../container'
import Grid from '../grid'

const Hero = ({ image, title, subtitle, to, className, ...props }) => {
  const Elem = to ? Link : 'div'

  return (
    <Elem
      to={to}
      className={classnames(className, 'block', 'relative', 'overflow-hidden')}
      {...props}
    >
      <Picture className="w-full" image={image} centered />
      <Container className="flex items-center relative z-10 h-48">
        <Grid>
          <Grid.Column span={6}>
            <Hdn size={2} weight="bold">{title}</Hdn>
            <Hdn size={3}>{subtitle}</Hdn>
          </Grid.Column>
        </Grid>
      </Container>
    </Elem>
  )
}

export default Hero
