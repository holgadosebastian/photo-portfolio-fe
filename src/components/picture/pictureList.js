import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

import Picture from './picture'
import Tabs from '../tabs'
import Hdn from '../heading'
import Button from '../button'
import Grid from '../grid'

const PictureList = ({ pictures, ...props }) => {
  const [picturesAspect, setPicturesAspect ] = useState('square')
  const [columnSpan, setColumnSpan] = useState({ xs: 4, md: 3, lg: 2 })
  const [displayType, setDisplayType] = useState('grid')

  useEffect(() => {
    switch (displayType) {
      case 'list':
        setPicturesAspect(null)
        setColumnSpan({ xs: 12, md: 12, lg: 12 })
        break;
      case 'grid':
      default:
        setPicturesAspect('square')
        setColumnSpan({ xs: 4, md: 3, lg: 2 })
    }
  }, [displayType])

  return (
    <Fragment>
      <Tabs>
        <Tabs.Tab name="Grid" active={displayType === 'grid'} icon="th" onClick={() => setDisplayType('grid')} />
        <Tabs.Tab name="List" active={displayType === 'list'} icon="list" onClick={() => setDisplayType('list')} />
      </Tabs>
      <Grid {...props}>
        {pictures.map(picture => {
          return (
            <Grid.Column key={picture.id} span={columnSpan}>
              <Link className='block'
                to={`/picture/${picture.id}`}
              >
                <Picture image={picture.mainImage.url} aspect={picturesAspect} />
              </Link>
              
              {displayType === 'list' && (
                <div className="py-2 border-solid border-white border-b-2 mb-4 flex">
                  <div className="flex-1">
                    <Hdn size={4}>{picture.title}</Hdn>
                  </div>
                  <div>
                    <Button to={`/picture/${picture.id}`}>View</Button>
                  </div>
                </div>
              )}
              
            </Grid.Column>
          )
        })}
      </Grid>
    </Fragment>
  )
}

PictureList.defaultProps = {
  pictures: [],
}

PictureList.propTypes = {
  pictures: PropTypes.array.isRequired,
}


export default PictureList