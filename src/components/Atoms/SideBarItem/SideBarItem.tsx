import { PropsWithChildren } from 'react'
import './SideBarItem.styles.scss'

type SideBarItemProps = {} & PropsWithChildren

const SideBarItem = ({ children }: SideBarItemProps) => {
  return <div className='sidebar_item'>{children}</div>
}

export default SideBarItem
