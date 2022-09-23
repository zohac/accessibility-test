import { AccessibilityStandardType } from '../type'

export interface AccessibilityTestFileInterface {
  reportFolderName: string
  standard: AccessibilityStandardType
  sitemap: boolean
  urls: string[]
}
