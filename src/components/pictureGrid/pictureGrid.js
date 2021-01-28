import React from 'react'
import classnames from 'classnames'

import Hdn from '../heading'
import Picture from '../picture'
import Button from '../button'

const PictureGrid = ({ title, subtitle, pictures, link, className }) => {
  return (
    <div
      className={classnames(className, 'grid', 'gap-x-1', 'gap-y-1', 'h-64')}
      style={{
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
      }}
    >
      <div
        className="p-5 flex flex-row items-center self-stretch"
        style={{ alignSelf: 'stretch', gridColumn: '1 / span 2' }}
      >
        <div>
          <Hdn size={2} weight={700}>
            {title}
          </Hdn>
          {subtitle && <Hdn>{subtitle}</Hdn>}
        </div>
      </div>
      {pictures.slice(0, 6).map((picture, i) => {
        const isLast = i === pictures.length - 1

        return (
          <div
            key={picture.mainImage.url}
            className="relative flex items-center justify-center"
          >
            <Picture image={picture.mainImage.url} absolute overlay={isLast} />
            {isLast && (
              <Button className="relative z-2" to={link}>
                View
              </Button>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default PictureGrid
