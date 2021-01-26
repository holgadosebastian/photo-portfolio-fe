import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const GridColumn = ({ span, className, children }) => {
  return (
    <div
      className={classnames(className, {
        'w-full': span.xs === 12,
        [`w-${span.xs}/12`]: span.xs !== 12,
        [`sm:w-${span.sm}/12`]: span.sm,
        [`md:w-${span.md}/12`]: span.md,
        [`lg:w-${span.lg}/12`]: span.lg,
      })}
    >
      {children}
    </div>
  )
}

GridColumn.defaultProps = {
  span: { xs: 12 },
  className: undefined,
}

GridColumn.propTypes = {
  span: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number,
    lg: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default GridColumn
