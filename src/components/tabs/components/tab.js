import React from 'react'
import classnames from 'classnames'

import Icon from '../../icon'

const Tab = ({ name, icon, active, className, ...props}) => {
  return (
    <div className={classnames(className, 'flex', 'flex-col', 'flex-auto', 'items-center', 'px-4', 'py-3', 'cursor-pointer', 'border-solid', 'border-b-2', 'border-white', {
      'text-blue-400 border-b-4 border-blue-400': active,
    })} {...props}>
      {icon && <Icon name={icon} />}
      <p>{name}</p>
    </div>
  )
}

export default Tab
