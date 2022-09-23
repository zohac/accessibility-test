import { defaultReporterOption } from './default.reporter.option'
import { Pa11yDefaultOptionInterface } from '@/interface'

const configs: Pa11yDefaultOptionInterface[] = []
let counter = 0

defaultReporterOption.urls.forEach(url => {
    const screenCapturePath = 0 === counter
        ? defaultReporterOption.screenCapture
        : `${defaultReporterOption.screenCapture}-${counter}`

    configs.push({
        url:     url,
        options: {
            standard:      defaultReporterOption.standard,
            screenCapture: `${screenCapturePath}.png`
        }
    })

    counter++
})

export default configs
