import React, { useState } from 'react'
import { useParams } from "react-router";
import moment from 'moment'

import Container from '../components/container'
import Picture from '../components/picture'

import Hdn from '../components/heading'

import Tag from '../components/tag'

import Query from "../components/query";
import PICTURE_QUERY from "../queries/picture/picture";

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true)
  let { id } = useParams()

  const getTakenMessage = (dateTaken, place, region) => {
    if ( !dateTaken && !place && !region ) return null

    let message = 'Taken'

    if (dateTaken) {
      let formattedDate = moment(dateTaken).format('MMMM, YYYY')
      message = `${message} on ${formattedDate}`
    }

    if (place) {
      message = `${message} in ${place}, ${region}`
    } else {
      message = `${message} in ${region}`
    }

    return message
  }

  return (
    <Container>
      <Query query={PICTURE_QUERY} id={id}>
        {({ data: { picture } }) => {
          const { title, mainImage, tags, place, region, dateTaken } = picture
          return (
            <div>
              <Picture
                image={mainImage.url}
                shadow={showOverlay}
                onClick={() => {
                  setShowOverlay(!showOverlay)
                }}
              >
                {showOverlay && (
                  <Hdn size={2} weight='bold' className="absolute left-4 bottom-4">{title}</Hdn>
                )}
              </Picture>

              { tags && tags.length > 0 && (
                <Tag.List centered className="pt-4">
                  { tags.map(tag => {
                    return <Tag key={tag.id} id={tag.id}>{tag.title}</Tag>
                  })}
                </Tag.List>
                )
              }

              <Hdn size={6} centered className="mt-3">
                {getTakenMessage(dateTaken, place, region)}
              </Hdn>
            </div>
          )
        }}
      </Query>

    </Container>
  )
}

export default Home