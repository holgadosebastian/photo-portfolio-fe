import React, { Fragment } from 'react'

import Container from '../components/container'
import Picture from '../components/picture'
import PictureList from '../components/picture/pictureList'

import Query from "../components/query";
import PICTURES_LIST_QUERY from "../queries/picture/pictureList";

const Home = () => {
  return (
    <Container>
      <Query query={PICTURES_LIST_QUERY}>
        {({ data: { pictures } }) => {
          return (
            <Fragment>
              <Picture image={pictures[0].mainImage.url} />
              <PictureList pictures={pictures} />
            </Fragment>
          )
        }}
      </Query>
    </Container>
  )
}

export default Home
