import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import Picture from '../picture'
import Hdn from '../heading'
import Container from '../container'
import Grid from '../grid'

const Hero = ({ image, title, subtitle, to, otherImages, className, ...props }) => {
  const Elem = to ? Link : 'div'

  console.log(otherImages)

  return (
    <Elem
      to={to}
      className={classnames(className, 'block', 'relative', 'overflow-hidden')}
      {...props}
    >
      <Picture className="w-full" image={image} centered />
      {otherImages.map((image, index) => (
        <Picture
          key={image}
          className={classnames('absolute', 'right-0', 'w-1/4', {
            'top-0': index === 0,
            'bottom-0': index === 1,
          })}
          style={{ height: '50%' }}
          image={image}
          centered
        />
      ))}
      <Container className="flex items-center relative z-10 h-48">
        <Grid>
          <Grid.Column span={{ xs: 6 }}>
            <Hdn size={2} weight="bold">{title}</Hdn>
            <Hdn size={3}>{subtitle}</Hdn>
          </Grid.Column>
        </Grid>
      </Container>
    </Elem>
  )
}

Hero.defaultProps = {
  otherImages: [],
}

export default Hero
