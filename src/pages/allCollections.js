import React from 'react'

import Container from '../components/container'
import Hero from '../components/hero'

import Query from "../components/query";
import ALL_COLLECTIONS_QUERY from "../queries/collection/allCollections";

const AllCollections = () => {
  return (
    <Container>
      <Query query={ALL_COLLECTIONS_QUERY}>
        {({ data: { collections } }) => collections.map(collection => {
          console.log(collection)
          const otherImages = collection.pictures.map(picture => picture.mainImage.url )
          
          return (
            <Hero
              key={collection.id}
              to={`/collection/${collection.id}`}
              title={collection.title}
              image={collection.image.url}
              otherImages={otherImages}
            />
          )
        })}
      </Query>
    </Container>
  )
}

export default AllCollections