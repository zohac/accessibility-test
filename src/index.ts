import { OptionInterface, ResultsInterface } from '@/interface'
import { CliReporter, HtmlReporter } from './utility'
import { configs } from './config'

// @ts-ignore
import pa11y from 'pa11y'

configs.forEach((config: OptionInterface) => {
    pa11y(config.url, config.options, (_error: any, results: ResultsInterface) => {
        const cli = new CliReporter(results)
        const html = new HtmlReporter(results)

        cli.display()
        html.export()
    })
})
