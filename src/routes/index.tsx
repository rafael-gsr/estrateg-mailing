import { createHashRouter } from 'react-router'
import Clients from '../components/Pages/Clients'
import Dashboards from '../components/Pages/Dashboards'
import Home from '../components/Pages/Home/Home'
import OverduedContracts from '../components/Pages/OverduedContracts'

const router = createHashRouter([
  {
    path: '/',
    children: [
      { index: true, Component: Home },
      { path: 'clients', Component: Clients },
      { path: 'dashboards', Component: Dashboards },
      { path: 'overdued', Component: OverduedContracts },
    ],
  },
])

export default router
