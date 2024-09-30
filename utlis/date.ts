const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const basicFormat = (date: Date): string => {
  return `${MONTHS[date.getMonth()]}, ${date.getFullYear()}`
}
