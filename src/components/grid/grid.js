import React from 'react';

import GridColumn from './components/column'

const Grid = ({ children }) => {
  return (
    <div className="flex flex-wrap">
      {children}
    </div>
  )
}

Grid.Column = GridColumn

export default Grid