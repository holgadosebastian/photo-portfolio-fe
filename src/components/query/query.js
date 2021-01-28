import React from 'react'
import { useQuery } from 'react-apollo'

import Loader from '../loader'

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id },
  })

  if (loading)
    return (
      <Loader.Container className="h-64" loadingMessage="Loading...">
        <Loader />
      </Loader.Container>
    )

  if (error) return <p>Error: {JSON.stringify(error)}</p>

  return children({ data })
}

export default Query
