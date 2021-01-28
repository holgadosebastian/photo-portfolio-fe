import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import Picture from '../picture'
import Hdn from '../heading'
import Container from '../container'
import Columns from '../columns'

const Hero = ({
  image,
  title,
  subtitle,
  to,
  otherImages,
  overlay,
  className,
  ...props
}) => {
  const Elem = to ? Link : 'div'

  return (
    <Elem
      to={to}
      className={classnames(className, 'block', 'relative', 'overflow-hidden')}
      {...props}
    >
      {image && (
        <Fragment>
          <Picture className="w-full" image={image} centered />

          {otherImages.map((image, index) => (
            <Picture
              key={image}
              className={classnames('absolute', 'right-0', 'w-1/4', 'z-1', {
                'top-0': index === 0,
                'bottom-0': index === 1,
              })}
              style={{ height: '50%' }}
              image={image}
              centered
            />
          ))}
        </Fragment>
      )}

      {overlay && (
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-25 z-2"></div>
      )}

      <Container className="flex items-center relative z-10 h-48">
        <Columns className="w-full">
          <Columns.Column span={{ xs: 12, md: 6 }}>
            {title && (
              <Hdn display size={2} weight={700}>
                {title}
              </Hdn>
            )}
            {subtitle && <Hdn size={3}>{subtitle}</Hdn>}
          </Columns.Column>
        </Columns>
      </Container>
    </Elem>
  )
}

Hero.defaultProps = {
  image: undefined,
  title: null,
  subtitle: null,
  to: null,
  otherImages: [],
  overlay: false,
  className: undefined,
}

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  to: PropTypes.string,
  otherImages: PropTypes.array,
  overlay: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Hero
