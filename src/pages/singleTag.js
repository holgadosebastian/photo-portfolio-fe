import React, { Fragment } from 'react'
import { useParams } from "react-router";

import Container from '../components/container'
import Hero from '../components/hero'
import PictureList from '../components/picture/pictureList'
import Query from "../components/query";
import TAG_QUERY from "../queries/tag/tag";

const SingleTag = () => {
  let { id } = useParams()

  return (
    <Container>
      <Query query={TAG_QUERY} id={id}>
        {({ data: { tag } }) => {
          return <Fragment>
            <Hero image={tag.image.url} title={tag.title} />
            <PictureList pictures={tag.pictures} />
          </Fragment>
          
        }}
      </Query>
    </Container>
  )
}

export default SingleTag