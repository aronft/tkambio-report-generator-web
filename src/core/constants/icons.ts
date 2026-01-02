import IconEye from '@/assets/icons/eye-show.svg?component'
import IconEyeOff from '@/assets/icons/eye-hide.svg?component'
import IconCalendar from '@/assets/icons/calendar.svg?component'
// import IconDownload from '@/assets/icons/download.svg?component'

export const ICON_LIBRARY = {
  eye: IconEye,
  'eye-off': IconEyeOff,
  calendar: IconCalendar,
  // download: IconDownload,
} as const

export type IconName = keyof typeof ICON_LIBRARY
