import React from 'react'

import Container from '../components/container'
import Picture from '../components/picture'
import Hdn from '../components/heading'

import Query from '../components/query'
import PICTURES_LIST_QUERY from '../queries/picture/pictureList'

const Home = () => {
  return (
    <Container>
      <Query query={PICTURES_LIST_QUERY}>
        {({ data: { pictures } }) => {
          return (
            <div className="relative">
              <Picture image={pictures[0].mainImage.url} />
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20 z-1"></div>
              <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center flex-col z-2">
                <Hdn size={4}>Sebastián Holgado</Hdn>
                <Hdn size={1} weight={600}>
                  Seb's Vignette
                </Hdn>
                <Hdn size={5} className="mt-2">
                  Based in Berlin 🇩🇪
                </Hdn>
              </div>
            </div>
          )
        }}
      </Query>
    </Container>
  )
}

export default Home
