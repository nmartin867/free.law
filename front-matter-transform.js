const fs = require('fs')
    , path = require('path')
    , glob = require('glob')

const matchExp = /^([A-Z][a-z]*):\s(.*)$/gm

const getMarkdownFiles = () => (
    new Promise((resolve, reject) => {
        glob('content/*.md', (err, filePaths) => {
            if (err) reject(err)
            resolve(filePaths)
        })
    })
)

const formatFrontMatter = (filePath) => (
    new Promise((resolve, reject) => {
        const fullPath = path.join(__dirname, filePath)
        fs.readFile(fullPath, 'utf8', (err, data) => {
            if(err) reject(err)
            let match = null
            let frontMatter = {}
            while((match = matchExp.exec(data)) !== null){
                frontMatter[match[1].toLowerCase()] = match[2]
            }
            resolve(frontMatter)
        })
    })
)

const processMarkdown = async () => {
    try {
        const filePaths = await getMarkdownFiles()
        const tasks = filePaths.map(filePath => formatFrontMatter(filePath))
        return Promise.all(tasks)
    } catch (err) {
        console.error(err)
    }
}

processMarkdown().then(matches => {
    matches.forEach(x => {
        const date = new Date(x.date)
        console.log(`year ${date.getFullYear()} month ${date.getMonth() + 2} day ${date.getDate()}`)
    })

})