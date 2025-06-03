import { useState } from 'react'

import Logo from '../../Atoms/Logo/Logo'

import SideBarItem from '../../Atoms/SideBarItem'
import Title from '../../Atoms/Title'

import './SideBarMenu.styles.scss'
import { Link } from 'react-router'
import { SidebarItemProps, SideBarMenuProps } from './SideBarMenu.types'
import { sidebarItems } from './SideBarMenu.config'

const SideBarMenu = ({ children }: SideBarMenuProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>()

  function sidebarItemFactory({
    path,
    label,
    IconComponent,
  }: SidebarItemProps) {
    return (
      <SideBarItem>
        <Link
          to={path}
          viewTransition
          className='sidebar_menu__item__link'
        >
          <IconComponent className='sidebar_menu__item__icon' />
          {openSidebar ? label : ''}
        </Link>
      </SideBarItem>
    )
  }

  function generateSidebarItems(itemsList: SidebarItemProps[]) {
    return itemsList.map((item) =>
      sidebarItemFactory({
        path: item.path,
        IconComponent: item.IconComponent,
        label: item.label,
      })
    )
  }

  return (
    <>
      <div className='sidebar_placeholder' />

      <nav
        onMouseOver={() => setOpenSidebar(() => true)}
        onMouseLeave={() => setOpenSidebar(() => false)}
        className={`sidebar_menu--${openSidebar ? 'open' : 'close'}`}
      >
        <SideBarItem>
          <Logo
            className='sidebar_menu__logo'
            width={64}
            height={64}
          />
          {openSidebar && (
            <Title
              level={2}
              colorScheme='light'
            >
              Estrateg Mailing
            </Title>
          )}
        </SideBarItem>

        {generateSidebarItems(sidebarItems)}

        {children}
      </nav>
    </>
  )
}

export default SideBarMenu
