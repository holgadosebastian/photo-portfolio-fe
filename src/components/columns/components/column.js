import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ColumnsColumn = ({ span, className, children }) => {
  return (
    <div
      className={classnames(className, {
        'w-full': span.xs === 12,
        [`w-${span.xs}/12`]: span.xs !== 12,
        [`md:w-${span.md}/12`]: span.md,
        [`lg:w-${span.lg}/12`]: span.lg,
        [`xl:w-${span.xl}/12`]: span.xl,
      })}
    >
      {children}
    </div>
  )
}

ColumnsColumn.defaultProps = {
  span: { xs: 12 },
  className: undefined,
}

ColumnsColumn.propTypes = {
  span: PropTypes.shape({
    xs: PropTypes.number.isRequired,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default ColumnsColumn
