import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import getImageUrl from '../../utils/getImageUrl'

const Picture = ({
  image,
  aspect,
  centered,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames(className, 'overflow-hidden', {
        'pb-100p': aspect === 'square',
        relative: !centered,
        'absolute h-full': centered,
      })}
      {...props}
    >
      <img
        className={classnames('w-full', 'h-full', 'z-2', {
          'object-contain': aspect !== 'square' && !centered,
          'absolute h-full object-center object-cover':
            aspect === 'square' || centered,
        })}
        src={getImageUrl(image)}
        alt="alt"
      />
      {children}
    </div>
  )
}

Picture.defaultProps = {
  image: undefined,
  aspect: null,
  centered: false,
  className: undefined,
  children: null,
}

Picture.propTypes = {
  image: PropTypes.string,
  aspect: PropTypes.oneOf([null, 'square']),
  centered: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
}

export default Picture
