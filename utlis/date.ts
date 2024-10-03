const MONTHS = [
  'Ene',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Ago',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
]

export const basicFormat = (date: Date): string => {
  return `${MONTHS[date.getMonth()]}, ${date.getFullYear()}`
}
