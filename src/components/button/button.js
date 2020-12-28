import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom';

const Button = ({ color, to, children, className, ...props}) => {
  const Elem = to ? Link : 'span'
  return (
    <Elem to={to} className={classnames(className, 'border-solid', 'border-b border-t border-l border-r', 'rounded-sm', 'inline-block', 'px-4', 'pointer', 'leading-7', {
      'border-white': color === 'ghost',
    })} {...props}>
      {children}
    </Elem>
  )
}

Button.defaultProps = {
  color: 'ghost',
}

export default Button
