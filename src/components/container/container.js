import React from 'react';
import classnames from 'classnames';

const Container = ({ children, className, ...props }) => {
  return (
    <div className={classnames(className, 'px-4')}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container