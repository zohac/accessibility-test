import { ReporterOptionInterface, ResultsInterface } from '@/interface'
import { ExtensionType } from '../type/extension.type'
import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { resolve } from 'path'

export abstract class Reporter {
  abstract readonly REPORT: ResultsInterface
  private readonly REPORT_FOLDER: string
  private readonly FILE_NAME: string

  constructor (defaultReporterOption: ReporterOptionInterface) {
      this.REPORT_FOLDER = defaultReporterOption.reportFolder
      this.FILE_NAME = defaultReporterOption.fileName
  }

  write (report: string, extension: ExtensionType) {
      if (!existsSync(resolve(this.REPORT_FOLDER)))
          mkdirSync(this.REPORT_FOLDER, { recursive: true })

      writeFileSync(
          `${this.REPORT_FOLDER}/${this.FILE_NAME}.${extension}`,
          report,
          'utf8',
      )
  }
}
