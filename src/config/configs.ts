import { defaultReporterOption } from './default.reporter.option'
import { Pa11yDefaultOptionInterface } from '@/interface'

export const configs: Pa11yDefaultOptionInterface[] = [
    {
        url:     'https://app.kidizz.com/',
        options: {
            standard:      'WCAG2AA',
            screenCapture: `${defaultReporterOption.screenCapture}`
        }
    }
]
