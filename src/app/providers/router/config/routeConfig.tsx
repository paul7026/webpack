import { createBrowserRouter } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'

export enum AppRoutes {
  MAIN = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
}

export const router = createBrowserRouter([
  { path: RoutePath.main, element: <MainPage /> },
])
