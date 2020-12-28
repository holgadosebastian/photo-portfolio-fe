import React, { useState } from 'react'
import { useParams } from "react-router";

import Container from '../components/container'
import Picture from '../components/picture'

import Hdn from '../components/heading'

import Tag from '../components/tag'

import Query from "../components/query";
import PICTURE_QUERY from "../queries/picture/picture";

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true)
  let { id } = useParams()

  return (
    <Container>
      <Query query={PICTURE_QUERY} id={id}>
        {({ data: { picture } }) => {
          return (
            <div>
              <Picture
                image={picture.mainImage.url}
                shadow={showOverlay}
                onClick={() => {
                  setShowOverlay(!showOverlay)
                }}
              >
                {showOverlay && (
                  <Hdn size={2} weight='bold' className="absolute left-4 bottom-4">{picture.title}</Hdn>
                )}
              </Picture>

              { picture.tags && picture.tags.length && (
                <Tag.List>
                  { picture.tags.map(tag => {
                    return <Tag key={tag.id} id={tag.id}>{tag.title}</Tag>
                  })}
                </Tag.List>
                )
              }
            </div>
          )
        }}
      </Query>

    </Container>
  )
}

export default Home