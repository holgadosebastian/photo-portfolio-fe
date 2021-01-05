import React from 'react'
import classnames from 'classnames'

import Hdn from '../../../components/heading'

const LoaderContainer = ({ loadingMessage, className, children }) => {
  return (
    <div className={classnames(className, 'flex', 'flex-col', 'items-center', 'justify-center')}>
      {children}
      {loadingMessage && (
        <Hdn size={6} className='mt-2'>{loadingMessage}</Hdn>
      )}
    </div>
  )
}

export default LoaderContainer
