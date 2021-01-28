import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

const Button = ({ color, to, children, className, ...props }) => {
  const Elem = to ? Link : 'span'
  return (
    <Elem
      to={to}
      className={classnames(
        className,
        'border-solid',
        'border-b border-t border-l border-r',
        'rounded-sm',
        'inline-block',
        'px-4',
        'pointer',
        'leading-7',
        'transition-colors',
        {
          'border-white hover:bg-white hover:text-black': color === 'ghost',
        }
      )}
      {...props}
    >
      {children}
    </Elem>
  )
}

Button.defaultProps = {
  color: 'ghost',
  to: null,
  className: undefined,
}

Button.propTypes = {
  color: PropTypes.oneOf(['ghost']),
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Button
