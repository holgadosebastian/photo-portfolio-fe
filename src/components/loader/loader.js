import React from 'react'
import classnames from 'classnames'

import LoaderContainer from './components/container'

const Loader = ({ className }) => {
  return (
    <span
      className={classnames(
        className,
        'inline-block',
        'w-10',
        'h-10',
        'border-solid',
        'border-2',
        'border-white',
        'rounded-full',
        'animate-spin'
      )}
      style={{ borderBottomColor: 'transparent' }}
    />
  )
}

Loader.defaultProps = {
  className: undefined,
}

Loader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

Loader.Container = LoaderContainer

export default Loader
