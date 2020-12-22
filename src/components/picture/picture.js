import React from 'react';
import classnames from 'classnames'

const Picture = ({ shape }) => {
  return (
    <div className={classnames('relative', 'overflow-hidden', {
      'pb-100p': shape === 'square'
    })}>
      <img
        className={classnames('container', {
          'absolute top-1/2 left-1/2': shape === 'square',
        })}
        src="https://images.unsplash.com/photo-1608552938503-9211bf554f22?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="alt"
      />
    </div>
  )
}

export default Picture