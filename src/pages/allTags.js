import React from 'react'

import Container from '../components/container'
import Grid from '../components/grid'
import Hero from '../components/hero'

import Query from "../components/query";
import ALL_TAGS_QUERY from "../queries/tag/allTags";

const AllTags = () => {
  return (
    <Container>
      <Query query={ALL_TAGS_QUERY}>
        {({ data: { tags } }) => (
          <Grid>
            {tags.map(tag => (
              <Grid.Column key={tag.id} span={{ xs: 12, md: 6 }}>
                <Hero
                  to={`/tag/${tag.id}`}
                  title={tag.title}
                  image={tag.image.url} 
                />
              </Grid.Column>
            ))}
          </Grid>
        )}
      </Query>
    </Container>
  )
}

export default AllTags
