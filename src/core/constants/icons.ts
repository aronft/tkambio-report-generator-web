import IconEye from '@/assets/icons/eye-show.svg?component'
import IconEyeOff from '@/assets/icons/eye-hide.svg?component'
import IconCalendar from '@/assets/icons/calendar.svg?component'
import IconDownload from '@/assets/icons/download.svg?component'
import Close from '@/assets/icons/close.svg?component'
import ProgressActivity from '@/assets/icons/progress_activity.svg?component'

export const ICON_LIBRARY = {
  eye: IconEye,
  'eye-off': IconEyeOff,
  calendar: IconCalendar,
  download: IconDownload,
  close: Close,
  'progress-activity': ProgressActivity,
} as const

export type IconName = keyof typeof ICON_LIBRARY
