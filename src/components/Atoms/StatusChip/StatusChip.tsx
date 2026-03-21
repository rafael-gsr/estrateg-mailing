import { Status } from '../../../constants/Status'
import './StatusChip.styles.scss'
import { getStatusChipProps } from './StatusChip.utils'

/*
  could be:
  regular
  arouseInterest
  firstFollowUp
  secondFollowUp
  breakup
*/

const StatusChip = ({ status }: { status: Status | string }) => {
  const props = getStatusChipProps(status)
  return <p className={`status_chip--${props.color}`}>{props.label}</p>
}

export default StatusChip
