import { ReporterOptionInterface, ResultsInterface } from '@/interface'
import { fileExists } from './fs.helper'
import { ExtensionType } from '../type'
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

      const filepath = this.getFilePath(`${this.REPORT_FOLDER}/${this.FILE_NAME}.${extension}`)

      writeFileSync(filepath, report, 'utf8')
  }

  private getFilePath (filePath: string, counter: number = 0): string {
      const fileParts = filePath.split('.')

      let filePathName = 0 === counter ? filePath : `${fileParts[0]}-${counter}.${fileParts[1]}`

      if (fileExists(filePathName)) {
          counter++

          filePathName = this.getFilePath(filePath, counter)
      }

      return filePathName
  }
}
