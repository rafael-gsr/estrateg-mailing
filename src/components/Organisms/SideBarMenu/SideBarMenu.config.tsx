import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'

import { SidebarItemProps } from './SideBarMenu.types'

export const sidebarItems: SidebarItemProps[] = [
  { path: '/', label: 'Home', IconComponent: HomeIcon },
  { path: '/clients', label: 'Clientes', IconComponent: PersonIcon },
  { path: '/dashboards', label: 'Dashboards', IconComponent: DashboardIcon },
]
