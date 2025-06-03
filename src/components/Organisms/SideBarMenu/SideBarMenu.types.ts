import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { PropsWithChildren } from 'react'

export type SideBarMenuProps = {} & PropsWithChildren

export type SidebarItemProps = {
  path: string
  label: string
  IconComponent: OverridableComponent<SvgIconTypeMap<object, 'svg'>>
}
