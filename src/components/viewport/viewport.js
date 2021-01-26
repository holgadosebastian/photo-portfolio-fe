import React from 'react'
import classnames from 'classnames'

const Viewport = ({ children, className, ...props}) => {
  return (
    <div className={classnames(className, 'flex', 'items-center', 'relative')}
      style={{ height: 'calc(100vh - 96px)' }}
      {...props}
    >
      <div className="absolute bottom-0 left-0 right-0 t-0 top-0">
        {children}
      </div>
    </div>
  )
}

export default Viewport
