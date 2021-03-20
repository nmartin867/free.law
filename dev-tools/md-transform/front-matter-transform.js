const glob = require('glob')
    , path = require('path')
    , {mkdir, readFile} = require('fs/promises')

const matchExp = /^([A-Z][a-z]*):\s(.*)$/gm
const projectRoot = path.join(__dirname, '../../')
const postContent = path.join(projectRoot, 'content')
const postBase = path.join(projectRoot, '/web/src/posts')

const getMarkdownFiles = () => (
    new Promise((resolve, reject) => {
        glob(`${postContent}/*.md`, (err, filePaths) => {
            if (err) reject(err)
            resolve(filePaths)
        })
    })
)

const formatFrontMatter = async (filePaths) => {
    try {
        return await Promise.all(filePaths.map(async p => {
            const rawMd = await readFile(p, {encoding: 'utf8'})
            const content = rawMd.trim()
            let matchOffset = -1
            let newLineOffset = -1
            let match = null
            const frontMatter = {content: null}
            while ((match = matchExp.exec(content)) !== null) {
                frontMatter[match[1].toLowerCase()] = match[2]
                matchOffset++
            }
            if (matchOffset === -1) throw Error(`${p} Markdown file does not contain frontmatter`)
            for (let i = 0; i < content.length; i++) {
                if (content.charAt(i) === '\n') newLineOffset++
                if (newLineOffset === matchOffset) {
                    frontMatter.content = content.substr(i + 1)
                    break
                }
            }
            return frontMatter
        }))
    } catch (err) {
        console.error(err)
        throw err
    }
}

const resolveFolder = (fm) => {
    const postDate = new Date(fm.date)
    const year = postDate.getFullYear()
    const month = postDate.getMonth()
    const day = postDate.getDate()

    const monthPart = month < 10 ? `0${month}` : month
    const dayPart = day < 10 ? `0${day}` : day
    const titlePart = fm.title.split(' ').map(p => p.toLowerCase()).join('-')
    return path.join(postBase, `${year}/${monthPart}/${dayPart}/${titlePart}`)
}

const createPostFolders = async (frontArr) => {
    try {
        const dirs = frontArr.map(fm => resolveFolder(fm))
        await Promise.all(dirs.map(d => mkdir(d, {recursive: true})))
    } catch (err) {
        console.error(err)
        throw err
    }
}

const processMarkdown = async () => {
    try {
        const filePaths = await getMarkdownFiles()
        const fmArr = await formatFrontMatter(filePaths)
        await createPostFolders(fmArr)
    } catch (err) {
        console.error(err)
        throw err
    }
}

processMarkdown()
    .then(() => process.exit(0))
    .catch(err => process.exit(1))