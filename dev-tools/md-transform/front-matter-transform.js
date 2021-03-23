const glob = require('glob')
    , path = require('path')
    , colors = require('colors')
    , minimist = require('minimist')
    , { mkdir, readFile, writeFile, stat, rmdir } = require('fs/promises')

const matchExp = /^([A-Z][a-z]*):\s(.*)$/gm
const projectRoot = path.join(__dirname, '../../')
const postContent = path.join(projectRoot, 'content')
const postBase = path.join(projectRoot, '/web/src/posts')


const exists = async (filePath) => {
    try {
        await stat(filePath)
        return true
    } catch (err) {
        return false
    }
}

const getMarkdownFiles = (verbose) => (
    new Promise((resolve, reject) => {
        glob(`${postContent}/*.md`, (err, filePaths) => {
            if (err) reject(err)
            if(verbose) console.log(`importing ${filePaths.length} posts...`.blue)
            resolve(filePaths)
        })
    })
)

const formatFrontMatter = async (filePaths, verbose) => {
    try {
        return await Promise.all(filePaths.map(async p => {
            if(verbose) console.log(`parsing front matter from ${p}...`.blue)
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
    const month = postDate.getMonth() + 1
    const day = postDate.getDate()

    const monthPart = month < 10 ? `0${month}` : month
    const dayPart = day < 10 ? `0${day}` : day
    return path.join(postBase, `${year}/${monthPart}/${dayPart}/${fm.slug}`)
}

const createPostFolders = async (frontArr, verbose) => {
    try {
        if(!await exists(postBase)) await mkdir(postBase)
        if(verbose) console.log(`creating post folder structure...`.blue)
        const dirs = frontArr.map(fm => resolveFolder(fm))
        await Promise.all(dirs.map(d => mkdir(d, {recursive: true})))
    } catch (err) {
        console.error(err)
        throw err
    }
}

const writePosts = async (frontArr, options) => {
    try {
        await Promise.all(frontArr.map(async fm => {
            let fileContent = "---\n"
            for(const p in fm){
                if(p === 'content') continue
                fileContent+= `${p}: "${fm[p].replace(/"/g, '\\"')}"\n`
            }
            fileContent+= `---\n\r${fm.content}`
            const filePath = path.join(postBase, `${fm.slug}.md`)
            if(!options.force && await exists(filePath)){
                if(options.verbose) console.log(`skipping ${filePath}...`.blue)
                return Promise.resolve()
            }
            if(options.verbose) console.log(`creating ${filePath}...`.blue)
            return await writeFile(filePath, fileContent, { encoding: 'utf8' })
        }))
    } catch (err) {
        console.error(err)
        throw err
    }
}

const importMarkdown = async (options) => {
    try {
        const filePaths = await getMarkdownFiles(options.verbose)
        const fmArr = await formatFrontMatter(filePaths, options.verbose)
        await writePosts(fmArr, options)
    } catch (err) {
        console.error(err)
        throw err
    }
}

const options = {
    verbose: false,
    v: false,
    force: false,
    f: false
}
const validOptions = Object.keys(options)

const args = minimist(process.argv.slice(2), {
    boolean: validOptions
})

if(args.length === 0) process.exit(1)
for(const p in args) {
    if(validOptions.indexOf(p) !== -1) options[p] = true
}
if(args._[0] === 'clean' || args._[0] === 'c'){
    exists(postBase).then(e => {
        if(!e) process.exit(0)
        rmdir(postBase, { recursive: true })
            .then(() => processs.exit(0))
            .catch(err => {
                console.error(err)
                process.exit(1)
            })
    }).catch(err => {
        console.error(err)
        process.exit(1)
    })
}
if(args._[0] === 'import' || args._[0] === 'i'){
    importMarkdown(options)
        .then(() => process.exit(0))
        .catch(err => {
            console.error(err)
            process.exit(1)
        })
}
