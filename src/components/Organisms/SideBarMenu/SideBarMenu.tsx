import { useState } from 'react'

import Logo from '../../Atoms/Logo/Logo'

import SideBarItem from '../../Atoms/SideBarItem'
import Title from '../../Atoms/Title'

import './SideBarMenu.styles.scss'
import { SideBarMenuProps } from './SideBarMenu.types'
import { generateSidebarItems, sidebarItems } from './SideBarMenu.config'

const SideBarMenu = ({ children }: SideBarMenuProps) => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false)
  return (
    <>
      <div className='sidebar_placeholder' />

      <nav
        onMouseOver={() => setOpenSidebar(() => true)}
        onMouseLeave={() => setOpenSidebar(() => false)}
        className={`sidebar_menu--${openSidebar ? 'open' : 'close'}`}
      >
        <div className='sidebar_menu__logo'>
          <SideBarItem>
            <Logo
              className='sidebar_menu__logo__image'
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
        </div>

        {generateSidebarItems(sidebarItems, openSidebar)}

        {children}
      </nav>
    </>
  )
}

export default SideBarMenu
