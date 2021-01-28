import React from 'react'
import { useQuery } from 'react-apollo'

import Loader from '../loader'

const Query = ({ query, id, loader, children }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id },
  })

  if (loading)
    return (
      loader || (
        <Loader.Container className="h-64" loadingMessage="Loading...">
          <Loader />
        </Loader.Container>
      )
    )

  if (error) return <p>Error: {JSON.stringify(error)}</p>

  return children({ data })
}

Query.defaultProps = {
  loader: null,
}

export default Query
