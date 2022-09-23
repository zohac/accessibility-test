#Test d'accessibilité avec PA11Y
## Commande
Build the type script
```bash
yarn build
```

Execute test
```bash
yarn test
```

## Configuration
Add a configuration file "accessibility-test.json" to the root of the project.

You can copy the file "accessibility-test.json.dist" and rename it to "accessibility-test.json".

```json
{
  "reportFolderName": "reports",
  "standard": "WCAG2AA",
  "sitemap": false,
  "urls": [
    "https://pa11y.org/"
  ]
}
```

### reportFolderName
the name of the report registration files

### standard
this option can take one of the following values
* Section508
* WCAG2A
* WCAG2AA
* WCAG2AAA

### sitemap
```
This option is not yet valid
```
If this option is set to "true", then the urls options are sitemap addresses
For example : 
* https://pa11y.org/sitemap.xml
