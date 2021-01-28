import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ColumnsColumn from './components/column'

const Columns = ({ children, className, ...props }) => {
  return (
    <div className={classnames(className, 'flex', 'flex-wrap')} {...props}>
      {children}
    </div>
  )
}

Columns.defaultProps = {
  className: undefined,
}

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

Columns.Column = ColumnsColumn

export default Columns
