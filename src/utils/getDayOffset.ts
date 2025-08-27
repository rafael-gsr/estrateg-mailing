import { Dayjs } from 'dayjs'

export function getDateGapInDays(date1: Dayjs, date2: Dayjs) {
  return date1.diff(date2, 'days')
}

export function getDateGapInMonths(date1: Dayjs, date2: Dayjs) {
  return date1.diff(date2, 'months')
}

export function getDateGapInHours(date1: Dayjs, date2: Dayjs) {
  return date1.diff(date2, 'hours')
}
