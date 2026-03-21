import { Status } from '../../../constants/Status'
import { StatusChipProps } from './StatusChip.types'

export function getStatusChipProps(status: Status | string): StatusChipProps {
  switch (status) {
    case Status.REGULAR:
      return { label: 'Regular', color: 'green' }
    case Status.AROUSE_INTEREST:
      return { label: 'Despertar Interesse', color: 'blue' }
    case Status.FIRST_FOLLOW_UP:
      return { label: 'Primeiro FollowUp', color: 'yellow' }
    case Status.SECOND_FOLLOW_UP:
      return { label: 'Segundo FollowUp', color: 'orange' }
    case Status.BREAKUP:
      return { label: 'Breakup', color: 'red' }
    default:
      return { label: 'Estado inválido', color: 'gray' }
  }
}
