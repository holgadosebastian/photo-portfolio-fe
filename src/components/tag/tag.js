import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

import TagList from './components/tagList'

const Tag = ({ id, children, className, ...props }) => {
  return (
    <Link
      to={`/tag/${id}`}
      className={classnames(
        className,
        'inline-block',
        'border-white',
        'border-t border-r border-b border-l',
        'border-solid',
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

Tag.defaultProps = {
  className: undefined,
}

Tag.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

Tag.List = TagList

export default Tag
