import { defaultReporterOption } from '../config'
import { ResultsInterface } from '@/interface'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'

// @ts-ignore
import html from 'pa11y-reporter-html'

export class HtmlReporter {
    private readonly REPORT: ResultsInterface
    private readonly REPORT_FOLDER: string
    private readonly FILE_NAME: string

    constructor (report: ResultsInterface) {
        this.REPORT = report
        this.REPORT_FOLDER = defaultReporterOption.reportFolder
        this.FILE_NAME = defaultReporterOption.fileName
    }

    async export (): Promise<HtmlReporter> {
        if (typeof this.REPORT === 'undefined')
            throw new Error('The report can not be undefined. Please add it to the reporter. new HtmlReporter(report).')

        const htmlResults = await html.results(this.REPORT)

        this.write(htmlResults)

        return this
    }

    private write (report: string) {
        if (!existsSync(resolve(this.REPORT_FOLDER)))
            mkdirSync(this.REPORT_FOLDER, { recursive: true })

        writeFileSync(
            `${this.REPORT_FOLDER}/${this.FILE_NAME}.html`,
            report,
            'utf8',
        )
    }
}
