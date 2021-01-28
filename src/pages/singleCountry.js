import React, { Fragment } from 'react'
import { useParams } from 'react-router'

import Container from '../components/container'
import Hero from '../components/hero'
import PictureList from '../components/picture/pictureList'
import Query from '../components/query'
import COUNTRY_QUERY from '../queries/country/country'

const SingleTag = () => {
  let { id } = useParams()

  return (
    <Container>
      <Query query={COUNTRY_QUERY} id={id}>
        {({ data: { country } }) => {
          return (
            <Fragment>
              <Hero image={country.image.url} title={country.name} />
              <PictureList pictures={country.pictures} />
            </Fragment>
          )
        }}
      </Query>
    </Container>
  )
}

export default SingleTag
