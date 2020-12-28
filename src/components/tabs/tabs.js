import React from 'react'

import Tab from './components/tab'

const Tabs = ({ children, ...props}) => {
  return (
    <div className="flex" {...props}>
      {children}
    </div>
  )
}

Tabs.Tab = Tab

export default Tabs
