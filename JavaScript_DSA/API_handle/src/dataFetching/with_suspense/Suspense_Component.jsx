import React, { Suspense } from 'react'
import List from './List'
import CardLoader from '../../components/CardLoader'
import ErrorBoundary from './ErrorBoundery'

const Suspense_Component = () => {
  return (
    <div>
      <ErrorBoundary>
      <Suspense fallback={<CardLoader />}>
        <List />
      </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default Suspense_Component