import React from 'react'
import classnames from 'classnames'

const Container = ({ children, className, ...props }) => {
  return (
    <div
      className={classnames(className, 'px-4', 'max-w-screen-xl', 'mx-auto')}
      {...props}
    >
      {children}
    </div>
  )
}

Container.defaultProps = {
  className: undefined,
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Container
