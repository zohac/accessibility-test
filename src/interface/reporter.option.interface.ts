import { AccessibilityStandardType } from '../type'

export interface ReporterOptionInterface {
  reportFolder: string
  screenCapture: string
  fileName: string
  standard: AccessibilityStandardType
  urls: string[]
}
