import { defaultReporterOption } from './default.reporter.option'
import { OptionInterface } from '@/interface'

export const configs: OptionInterface[] = [
    {
        url:     'https://pa11y.org/',
        options: {
            standard:      'WCAG2AA',
            screenCapture: `${defaultReporterOption.screenCapture}`
        }
    }
]
