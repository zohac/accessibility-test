import { ResultsInterface } from '@/interface'
import { Reporter } from './reporter'
import { defaultReporterOption } from '../config'

export class JsonReporter extends Reporter {
    readonly REPORT: ResultsInterface

    constructor (report: ResultsInterface) {
        super(defaultReporterOption)

        this.REPORT = report
    }

    async export () {
        if ('undefined' === typeof this.REPORT)
            throw new Error('The report can not be undefined. Please add it to the reporter. new JsonReporter(report).')

        const jsonResults = JSON.stringify(this.REPORT)

        this.write(jsonResults, 'json')
    }
}
