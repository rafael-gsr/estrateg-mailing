import { createBrowserRouter } from 'react-router'
import Clients from '../pages/Clients'
import App from '../App'
import Dashboards from '../pages/Dashboards'

const router = createBrowserRouter([
  { path: '/', Component: App, },
  { path: 'clients', Component: Clients },
  { path: 'dashboards', Component: Dashboards },
])

export default router
