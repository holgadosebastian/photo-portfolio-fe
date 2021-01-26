import React from 'react'
import classnames from 'classnames'

import GridColumn from './components/column'

const Grid = ({ children, className, ...props }) => {
  return (
    <div className={classnames(className, 'flex', 'flex-wrap')} {...props}>
      {children}
    </div>
  )
}

Grid.defaultProps = {
  className: undefined,
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

Grid.Column = GridColumn

export default Grid
