import React from 'react'

import Container from '../components/container'
import Columns from '../components/columns'
import Hero from '../components/hero'

import Query from '../components/query'
import ALL_TAGS_QUERY from '../queries/tag/allTags'

const AllTags = () => {
  return (
    <Container>
      <Query query={ALL_TAGS_QUERY}>
        {({ data: { tags } }) => (
          <Columns>
            {tags.map((tag) => (
              <Columns.Column key={tag.id} span={{ xs: 12, md: 6 }}>
                <Hero
                  to={`/tag/${tag.id}`}
                  title={tag.title}
                  image={tag.image.url}
                />
              </Columns.Column>
            ))}
          </Columns>
        )}
      </Query>
    </Container>
  )
}

export default AllTags
