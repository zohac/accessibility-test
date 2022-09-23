import { ResultsInterface } from '@/interface'
// @ts-ignore
import cli from 'pa11y-reporter-cli'

export class CliReporter {
    REPORT?: ResultsInterface

    constructor (report: ResultsInterface) {
        this.REPORT = report
    }

    display () {
        if ('undefined' === typeof this.REPORT)
            throw new Error('The report can not be undefined. Please add it to the reporter. new CliReporter(report).')

        const cliResults = cli.results(this.REPORT)

        console.log(cliResults)
    }
}
