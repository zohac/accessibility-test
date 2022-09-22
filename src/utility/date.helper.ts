export class DateHelper {
    static getCurrentDateToString (): string {
        const currentDate = new Date()

        return currentDate.toISOString().slice(0, 19).replace(/:/gi, '-')
    }

    static getCurrentDateToLocaleString (locale = 'fr-FR'): string {
        const currentDate = new Date()

        return this.getDateToLocaleString(currentDate, locale)
    }

    static getDateToLocaleString (date: Date, locale = 'fr-FR'): string {
        return date.toLocaleString(locale).slice(0, 17).replace(/,/gi, ' -')
    }
}
