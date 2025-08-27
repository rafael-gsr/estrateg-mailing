import { createHashRouter } from 'react-router'
import Clients from '../components/Pages/Clients'
import Dashboards from '../components/Pages/Dashboards'
import Home from '../components/Pages/Home/Home'

const router = createHashRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: 'clients', Component: Clients },
      { path: 'dashboards', Component: Dashboards },
    ],
  },
])

export default router
