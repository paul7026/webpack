import { Suspense } from 'react'
import { RouterProvider } from 'react-router'
import { router } from '../config/routeConfig'

export const AppRouter = () => (
  <Suspense fallback={<p>Loading...</p>}>
    <RouterProvider router={router} />
  </Suspense>
)
