import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Hdn = ({
  size,
  weight,
  centered,
  display,
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={classnames(className, {
        'text-sm': size === 6,
        'text-base': size === 5,
        'text-lg': size === 4,
        'text-xl': size === 3,
        'text-3xl': size === 2,
        'text-5xl': size === 1,

        ['font-thin']: weight === 100,
        ['font-extralight']: weight === 200,
        ['font-light']: weight === 300,
        ['font-normal']: weight === 400,
        ['font-medium']: weight === 500,
        ['font-semibold']: weight === 600,
        ['font-bold']: weight === 700,
        ['font-extrabold']: weight === 800,
        ['font-black']: weight === 900,

        'text-center': centered,
        'font-display': display,
      })}
      {...props}
    >
      {children}
    </p>
  )
}

Hdn.defaultProps = {
  size: undefined,
  weight: undefined,
  centered: false,
  display: false,
  className: undefined,
}

Hdn.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  weight: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
  centered: PropTypes.bool,
  display: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Hdn
