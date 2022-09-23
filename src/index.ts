import { OptionInterface, ResultsInterface, SitemapInterface } from '@/interface'
import { CliReporter, HtmlReporter, JsonReporter, SitemapParser } from './utility'
import { configs } from './config'

// @ts-ignore
import pa11y from 'pa11y'

configs.forEach((config: OptionInterface) => {
    pa11y(config.url, config.options, (_error: any, results: ResultsInterface) => {
        const cli = new CliReporter(results)
        const html = new HtmlReporter(results)
        const json = new JsonReporter(results)

        cli.display()
        html.export()
        json.export()
    })
})

/*
 * Get
 */
const sitemapParser = new SitemapParser()

await sitemapParser.fetch('https://patio-conseil.fr/page-sitemap.xml')
const sitemap: SitemapInterface = sitemapParser.parse()

console.log(sitemap)
