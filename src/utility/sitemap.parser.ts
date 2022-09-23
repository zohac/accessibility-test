import { UrlSitemapInterface, SitemapInterface } from '@/interface'
import { UrlHelper } from './url.helper'
import axios from 'axios'
import parser from 'xml2json'

export class SitemapParser {
    XML_RESPONSE?: string

    async fetch (xmlPath: string): Promise<SitemapParser> {
        if (!UrlHelper.isValidHttpUrl(xmlPath)) 
            throw new Error(`L'url ${xmlPath} n'est pas valide.`)
        
        const response = await axios.get(xmlPath)

        this.XML_RESPONSE = response.data
        return this
    }

    parse (): SitemapInterface {
        if ('undefined' === typeof this.XML_RESPONSE)
            throw new Error("L'xml n'a pas été récupéré, utilisé la méthode SitemapParser.fecth(xmlPath) avant.")

        const json = parser.toJson(this.XML_RESPONSE, {
            object:            true,
            reversible:        false,
            coerce:            false,
            sanitize:          true,
            trim:              true,
            arrayNotation:     false,
            alternateTextNode: false,
        })

        return this.convertJsonToSitemapInterface(json)
    }

    convertJsonToSitemapInterface (json: any): SitemapInterface {
        let sitemap = {}
        const urls: UrlSitemapInterface[] = []

        if ('urlset' in json) {
            if ('url' in json.urlset) {
                json.urlset.url.forEach((url: any) => {
                    if ('loc' in url)
                        urls.push(url as UrlSitemapInterface)
                })
            }
            sitemap = {
                urlset: {
                    url: urls
                }
            }
        }


        if (!('urlset' in sitemap))
            throw new Error('re-merde')

        return sitemap as SitemapInterface
    }
}
