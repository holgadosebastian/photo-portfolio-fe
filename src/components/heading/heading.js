import React from 'react'
import classnames from 'classnames'

const Hdn = ({size, weight, className, children, ...props}) => {
  return (
    <p className={classnames(className, {
      'text-sm': size === 6,
      'text-base': size === 5,
      'text-lg': size === 4,
      'text-xl': size === 3,
      'text-3xl': size === 2,
      'text-6xl': size === 1,
      [`font-${weight}`]: weight,
    })} {...props}>
      {children}
    </p>
  )
}

export default Hdn
