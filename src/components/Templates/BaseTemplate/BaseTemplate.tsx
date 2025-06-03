import { PropsWithChildren } from 'react'
import SideBarMenu from '../../Organisms/SideBarMenu'

import './BaseTemplate.styles.scss'

const BaseTemplate = ({ children }: PropsWithChildren) => {
  return (
    <section className='base_template'>
      <SideBarMenu />
      <div className='base_template__content'>{children}</div>
    </section>
  )
}

export default BaseTemplate
