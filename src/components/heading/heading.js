import React from 'react'
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
        [`font-${weight}`]: weight,
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
  size: PropTypes.oneof([1, 2, 3, 4, 5, 6]),
  weight: PropTypes.oneof([
    'thin', // 100
    'extralight', // 200
    'light', // 300
    'normal', // 400
    'medium', // 500
    'semibold', // 600
    'bold', // 700
    'extrabold', // 800
    'black', // 900
  ]),
  centered: PropTypes.bool,
  display: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default Hdn
