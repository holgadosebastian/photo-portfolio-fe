import React from 'react'
import classnames from 'classnames'

const Hdn = ({size, weight, centered, display, className, children, ...props}) => {
  return (
    <p className={classnames(className, {
      'text-sm': size === 6,
      'text-base': size === 5,
      'text-lg': size === 4,
      'text-xl': size === 3,
      'text-3xl': size === 2,
      'text-5xl': size === 1,
      [`font-${weight}`]: weight,
      'text-center': centered,
      'font-display': display,
    })} {...props}>
      {children}
    </p>
  )
}

export default Hdn
