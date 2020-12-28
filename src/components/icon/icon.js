import React from 'react'
import classnames from 'classnames'

const Icon = ({ name, className, ...props}) => {
  return (
    <span className={classnames(className, 'fa', {
      [`fa-${name}`]: name
    })} {...props} />
  )
}

export default Icon
