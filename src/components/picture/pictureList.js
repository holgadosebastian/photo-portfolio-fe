import React from 'react';
import classnames from 'classnames'

import Query from "../query";
import Picture from './picture'

import Grid from '../grid'

import PICTURES_QUERY from "../../queries/picture/pictures";

const PictureList = () => {
  return (
    <Grid>
      <Query query={PICTURES_QUERY} id={null}>
        {({ data: { pictures } }) => {
          return pictures.map( picture => {
            return (
              <Grid.Column key={picture.id}>
                <Picture image={picture.mainImage.url} shape="square" />
              </Grid.Column>
            )
          })
        }}
      </Query>
    </Grid>
  )
}

export default PictureList