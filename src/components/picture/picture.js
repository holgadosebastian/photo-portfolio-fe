import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import getImageUrl from '../../utils/getImageUrl'

const Picture = ({
  image,
  aspect,
  centered,
  absolute,
  overlay,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={classnames(className, 'overflow-hidden', {
        'pb-100p': aspect === 'square',
        relative: !centered && !absolute,
        'absolute h-full': centered || absolute,
        'top-0 right-0 bottom-0 left-0': absolute,
      })}
      {...props}
    >
      <img
        className={classnames('w-full', 'h-full', 'z-2', {
          'object-contain': aspect !== 'square' && !centered && !absolute,
          'absolute h-full object-center object-cover':
            aspect === 'square' || centered || absolute,
        })}
        src={getImageUrl(image)}
        alt="alt"
      />
      {overlay && (
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20" />
      )}
      {children}
    </div>
  )
}

Picture.defaultProps = {
  image: undefined,
  aspect: null,
  centered: false,
  overlay: false,
  className: undefined,
  children: null,
}

Picture.propTypes = {
  image: PropTypes.string,
  aspect: PropTypes.oneOf([null, 'square']),
  centered: PropTypes.bool,
  overlay: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
}

export default Picture
