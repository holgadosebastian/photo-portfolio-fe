import React from 'react'

import Container from '../components/container'
import PictureGrid from '../components/pictureGrid'

import Query from '../components/query'
import ALL_COLLECTIONS_QUERY from '../queries/collection/allCollections'

const AllCollections = () => {
  return (
    <Container>
      <Query query={ALL_COLLECTIONS_QUERY}>
        {({ data: { collections } }) =>
          collections.map((collection) => {
            const pictures = collection.pictures.filter((picture, i) => i < 6)

            return (
              <PictureGrid
                key={collection.id}
                className="mb-8"
                title={collection.title}
                pictures={pictures}
                link={`/collection/${collection.id}`}
              />
            )
          })
        }
      </Query>
    </Container>
  )
}

export default AllCollections
