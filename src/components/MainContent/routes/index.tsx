import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { Contact } from '../pages/Contact'
import { Resume } from '../pages/Resume'
import { IRouter } from './types'
import { Route, Routes } from 'react-router-dom'

export function generateRouteElements(routes: IRouter[]) {
  return (
    <Routes>
      {routes.map((route) => {
        const Element = route.element
        return <Route key={route.path} path={route.path} element={Element} />
      })}
    </Routes>
  )
}

export const routes: IRouter[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/resume',
    element: <Resume />,
  },
]

export const routerElement = generateRouteElements(routes)
