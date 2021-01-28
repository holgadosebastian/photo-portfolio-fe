import React, { Fragment } from 'react'
import { useParams } from 'react-router'

import Container from '../components/container'
import Hero from '../components/hero'
import PictureList from '../components/picture/pictureList'
import Query from '../components/query'
import COLLECTION_QUERY from '../queries/collection/collection'

const SingleTag = () => {
  let { id } = useParams()

  return (
    <Container>
      <Query query={COLLECTION_QUERY} id={id}>
        {({ data: { collection } }) => {
          return (
            <Fragment>
              <Hero
                overlay
                image={collection.image.url}
                title={collection.title}
              />
              <PictureList pictures={collection.pictures} />
            </Fragment>
          )
        }}
      </Query>
    </Container>
  )
}

export default SingleTag
