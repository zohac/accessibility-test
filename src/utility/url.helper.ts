export class UrlHelper {
    static isValidHttpUrl (string: string) {
        let url

        try {
            url = new URL(string)
        }
        catch (_) {
            return false
        }
        
        return 'http:' === url.protocol || 'https:' === url.protocol
    }
}
