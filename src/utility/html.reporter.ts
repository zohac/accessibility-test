import { ResultsInterface } from '@/interface'
import { Reporter } from './reporter'
import { defaultReporterOption } from '../config'

// @ts-ignore
import html from 'pa11y-reporter-html'

export class HtmlReporter extends Reporter {
    readonly REPORT: ResultsInterface

    constructor (report: ResultsInterface) {
        super(defaultReporterOption)

        this.REPORT = report
    }

    async export () {
        if ('undefined' === typeof this.REPORT)
            throw new Error('The report can not be undefined. Please add it to the reporter. new HtmlReporter(report).')

        const htmlResults = await html.results(this.REPORT)

        this.write(htmlResults, 'html')
    }
}
