import { ReporterOptionInterface } from '@/interface'
import { existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'
import { DateHelper } from '../utility/date.helper'

const date = DateHelper.getCurrentDateToString()
const defaultReportFolderName = 'report'
const reportFolder = `${defaultReportFolderName}/report-${date}`

if (!existsSync(resolve(reportFolder)))
    mkdirSync(reportFolder, { recursive: true })

export const defaultReporterOption: ReporterOptionInterface = {
    reportFolder:  `${reportFolder}`,
    screenCapture: `${reportFolder}/screenshot-${date}.png`,
    fileName:      `report-${date}`
}
