import React from 'react';
import classnames from 'classnames';

const GridColumn = ({ span, className, children }) => {
  return (
    <div className={classnames(className, {
      [`w-${span.xs}/12`]: span.xs,
      [`sm:w-${span.md}/12`]: span.md,
      [`lg:w-${span.lg}/12`]: span.lg,
    })}>
      {children}
    </div>
  )
}

GridColumn.defaultProps = {
  span: { xs: 12 },
}

export default GridColumn