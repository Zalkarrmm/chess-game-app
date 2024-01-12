import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppRoutesProps } from 'shared/types/router'

import { routeConfig } from '../config/routeConfig'

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<p>loading...</p>}>{route.element}</Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        id={route.id}
        element={element}
      />
    )
  }, [])
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}

export default memo(AppRouter)
