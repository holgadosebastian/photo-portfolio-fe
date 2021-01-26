import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Tab from './components/tab'

const Tabs = ({ children, className, ...props }) => {
  return (
    <div className={classnames(className, 'flex')} {...props}>
      {children}
    </div>
  )
}

Tabs.defaultProps = {
  children: null,
  className: undefined,
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

Tabs.Tab = Tab

export default Tabs
