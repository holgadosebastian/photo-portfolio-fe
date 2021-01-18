import React from 'react'

import Container from '../components/container'
import Hero from '../components/hero'

import Query from "../components/query";
import ALL_COUNTRIES_QUERY from "../queries/country/allCountries";

const AllCountries = () => {
  return (
    <Container>
      <Query query={ALL_COUNTRIES_QUERY}>
        {({ data: { countries } }) => countries.map(country => {
          
          return (
            <Hero
              key={country.id}
              to={`/country/${country.id}`}
              title={country.name}
              image={country.image ? country.image.url : undefined}
            />
          )
        })}
      </Query>
    </Container>
  )
}

export default AllCountries