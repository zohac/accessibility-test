import { ReporterOptionInterface } from '@/interface'
import { AccessibilityTestFileInterface } from '@/interface/accessibility.test.file.interface'
import { existsSync, mkdirSync } from 'fs'
import { resolve } from 'path'
import { DateHelper } from '../utility/date.helper'
import { fileExists, jsonFrom, writeJsonFileSync } from '../utility/fs.helper'

const date = DateHelper.getCurrentDateToString()
const defaultConfigurationFilePath = 'accessibility-test.json'
const defaultReportFolderName = 'reports'
const defaultAccessibilityOption: AccessibilityTestFileInterface = {
    reportFolderName: `${defaultReportFolderName}`,
    standard:         'WCAG2AA',
    sitemap:          false,
    urls:             [],
}

function ensureConfigFileExists (filepath: string) {
    if (fileExists(filepath)) 
        return
    
    writeJsonFileSync(defaultAccessibilityOption, defaultConfigurationFilePath)
}

function ensureReportFolderExist (reportFolderPath: string) {
    if (!existsSync(resolve(reportFolderPath)))
        mkdirSync(reportFolderPath, { recursive: true })
}

ensureConfigFileExists(defaultConfigurationFilePath)

const defaultConfig = jsonFrom(defaultConfigurationFilePath) as AccessibilityTestFileInterface
const reportFolder = `${defaultConfig.reportFolderName}/report-${date}`

ensureReportFolderExist(reportFolder)

export const defaultReporterOption: ReporterOptionInterface = {
    reportFolder:  `${reportFolder}`,
    screenCapture: `${reportFolder}/screenshot-${date}`,
    fileName:      `report-${date}`,
    standard:      defaultConfig.standard,
    urls:          defaultConfig.urls,
}
