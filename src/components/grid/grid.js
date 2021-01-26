import React from 'react';
import classnames from 'classnames';

import GridColumn from './components/column'

const Grid = ({ className, children }) => {
  return (
    <div className={classnames(className, 'flex', 'flex-wrap')}>
      {children}
    </div>
  )
}

Grid.Column = GridColumn

export default Grid