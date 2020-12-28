import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import TagList from './components/tagList'

const Tag = ({ id, className, children, ...props }) => {
  return (
    <Link to={`/tag/${id}`}
      className={classnames(className,
        'inline-block',
        'border-white',
        'border-t border-r border-b border-l', 'border-solid',
        'rounded',
        'px-2',
        'text-xs',
        'leading-5',
        'mx-1'
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

Tag.List = TagList

export default Tag
