import React from 'react';
import PropTypes from 'prop-types'
import classnames from 'classnames'

import getImageUrl from '../../utils/getImageUrl'

const Picture = ({ image, aspect, shadow, centered, className, children, ...props }) => {
  return (
    <div className={classnames(className, 'overflow-hidden', {
      'pb-100p': aspect === 'square',
      'relative': !centered,
      'absolute h-full': centered,
    })}
      {...props}
    >
      { shadow && <div className="absolute z-1 top-0 right-0 bottom-0 left-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.15), transparent)'}}></div>}
      
      <img
        className={classnames('w-full', 'z-2', {
          'absolute h-full object-center object-cover': aspect === 'square' || centered,
        })}
        src={getImageUrl(image)} alt="alt"
      />
      {children}
    </div>
  )
}

Picture.defaultProps = {
  image: undefined,
  aspect: null,
  className: undefined,
  children: null,
}

Picture.propTypes = {
  image: PropTypes.string,
  aspect: PropTypes.oneOf([null, 'square']),
}

export default Picture