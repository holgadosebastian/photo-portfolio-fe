import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


const TagList = ({ children, className, centered, ...props }) => {
  return (
    <div className={classnames(className, '-mx-1', {
      'text-center': centered,
    })} {...props}>
      {children}
    </div>
  )
}

TagList.defaultProps = {
  className: undefined,
  centered: false,
}

TagList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  centered: PropTypes.bool,
}

export default TagList
