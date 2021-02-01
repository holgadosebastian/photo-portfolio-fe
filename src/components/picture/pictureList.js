import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Picture from './picture'
import Viewport from '../viewport'
import Tabs from '../tabs'
import Hdn from '../heading'
import Button from '../button'
import Columns from '../columns'
import Modal from '../modal'

const PictureList = ({ pictures, ...props }) => {
  const [picturesAspect, setPicturesAspect] = useState('square')
  const [columnSpan, setColumnSpan] = useState({ xs: 4, md: 3, lg: 2 })
  const [displayType, setDisplayType] = useState('grid')
  const [showModal, setShowModal] = useState(false)
  const [currentPicture, setCurrentPicture] = useState(null)

  useEffect(() => {
    switch (displayType) {
      case 'list':
        setPicturesAspect(null)
        setColumnSpan({ xs: 12, md: 12, lg: 12 })
        break
      case 'grid':
      default:
        setPicturesAspect('square')
        setColumnSpan({ xs: 4, md: 3, lg: 2 })
    }
  }, [displayType])

  const updatePicture = (direction) => {
    const index = getPictureIndex(currentPicture)
    const lastPictureIndex = pictures.length - 1

    if (direction === 'next') {
      if (index === lastPictureIndex) {
        setCurrentPicture(pictures[0])
      } else {
        setCurrentPicture(pictures[index + 1])
      }
    } else if (direction === 'prev') {
      if (index === 0) {
        setCurrentPicture(pictures[lastPictureIndex])
      } else {
        setCurrentPicture(pictures[index - 1])
      }
    }
  }

  const getPictureIndex = (pic) =>
    pictures.findIndex((picture) => picture.id === pic.id)

  return (
    <Fragment>
      <Tabs>
        <Tabs.Tab
          active={displayType === 'grid'}
          icon="th"
          onClick={() => setDisplayType('grid')}
        />
        <Tabs.Tab
          active={displayType === 'list'}
          icon="list"
          onClick={() => setDisplayType('list')}
        />
      </Tabs>
      <Columns {...props}>
        {pictures.map((picture) => {
          return (
            <Columns.Column key={picture.id} span={columnSpan}>
              <div
                className="cursor-pointer"
                onClick={() => {
                  setShowModal(true)
                  setCurrentPicture(picture)
                }}
              >
                <Picture
                  image={picture.mainImage.url}
                  aspect={picturesAspect}
                />
              </div>

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
            </Columns.Column>
          )
        })}
      </Columns>

      <Modal
        className="text-center"
        show={showModal}
        onClose={() => setShowModal(false)}
      >
        {currentPicture && (
          <Fragment>
            <Viewport>
              <Picture
                className="h-full w-full"
                image={currentPicture.mainImage.url}
              />

              <div
                className="absolute top-0 left-0 bottom-0 w-50p"
                onClick={() => updatePicture('prev')}
              />
              <div
                className="absolute top-0 right-0 bottom-0 w-50p"
                onClick={() => updatePicture('next')}
              />
            </Viewport>

            <Button className="mt-4" onClick={() => updatePicture('prev')}>
              Prev
            </Button>
            <Button className="mt-4" onClick={() => setShowModal(false)}>
              Dismiss
            </Button>
            <Button className="mt-4" onClick={() => updatePicture('next')}>
              Next
            </Button>
          </Fragment>
        )}
      </Modal>
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
