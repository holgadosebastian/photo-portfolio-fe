import React from 'react'

import Container from '../components/container'
import Hero from '../components/hero'

import Query from "../components/query";
import ALL_TAGS_QUERY from "../queries/tag/allTags";

const AllTags = () => {
  return (
    <Container>
      <Query query={ALL_TAGS_QUERY}>
        {({ data: { tags } }) => tags.map(tag => (
          <Hero
            key={tag.id}
            to={`/tag/${tag.id}`}
            title={tag.title}
            image={tag.image.url} 
          />
        ))
        }
      </Query>
    </Container>
  )
}

export default AllTags
