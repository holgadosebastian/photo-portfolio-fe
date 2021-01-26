import React from 'react'
import classnames from 'classnames'

const Icon = ({ name, className, ...props }) => {
  return (
    <span
      className={classnames(className, 'fa', {
        [`fa-${name}`]: name,
      })}
      {...props}
    />
  )
}

Icon.defaultProps = {
  className: undefined,
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Icon
