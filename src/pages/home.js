import React, { Fragment } from 'react'

import Container from '../components/container'
import Picture from '../components/picture'
import Hdn from '../components/heading'

import Query from '../components/query'
import HOME_QUERY from '../queries/home/home'

const Home = () => {
  const loader = <div style={{ paddingBottom: '66.666%' }} />

  return (
    <Container>
      <div className="relative">
        <Query query={HOME_QUERY} featured={true} loader={loader}>
          {({ data: { pictures } }) => {
            return (
              <Fragment>
                {pictures.length > 0 && (
                  <Picture image={pictures[0].mainImage.url} />
                )}

                <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-20 z-1"></div>
              </Fragment>
            )
          }}
        </Query>

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
    </Container>
  )
}

export default Home
