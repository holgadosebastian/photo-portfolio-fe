import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Hdn from '../../../components/heading'

const LoaderContainer = ({ loadingMessage, className, children, ...props }) => {
  return (
    <div
      className={classnames(
        className,
        'flex',
        'flex-col',
        'items-center',
        'justify-center'
      )}
      {...props}
    >
      {children}
      {loadingMessage && (
        <Hdn size={6} className="mt-2">
          {loadingMessage}
        </Hdn>
      )}
    </div>
  )
}

LoaderContainer.defaultProps = {
  loadingMessage: null,
  className: undefined,
}

LoaderContainer.propTypes = {
  loadingMessage: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

export default LoaderContainer
