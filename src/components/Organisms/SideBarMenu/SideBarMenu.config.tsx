import DashboardIcon from '@mui/icons-material/Dashboard'
import PersonIcon from '@mui/icons-material/Person'
import HomeIcon from '@mui/icons-material/Home'

import { SidebarItemProps } from './SideBarMenu.types'
import SideBarItem from '../../Atoms/SideBarItem'
import { Link } from 'react-router'

export const sidebarItems: SidebarItemProps[] = [
  { path: '/', label: 'Home', IconComponent: HomeIcon },
  { path: '/clients', label: 'Clientes', IconComponent: PersonIcon },
  { path: '/dashboards', label: 'Dashboards', IconComponent: DashboardIcon },
]

function sidebarItemFactory(
  { path, label, IconComponent }: SidebarItemProps,
  isOpen: boolean
) {
  return (
    <SideBarItem>
      <Link
        to={path}
        viewTransition
        className='sidebar_menu__item__link'
      >
        <IconComponent className='sidebar_menu__item__icon' />
        {isOpen ? label : ''}
      </Link>
    </SideBarItem>
  )
}

export function generateSidebarItems(
  itemsList: SidebarItemProps[],
  isOpen: boolean
) {
  return itemsList.map((item) =>
    sidebarItemFactory(
      {
        path: item.path,
        IconComponent: item.IconComponent,
        label: item.label,
      },
      isOpen
    )
  )
}
