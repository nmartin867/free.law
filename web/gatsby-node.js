const path = require('path')


const isBlank = (value) => (!value || value.trim() === '')

const createTitleSlug = (title) => (
    title
        .trim()
        .split(' ')
        .map(t => t.toLowerCase())
        .join('-')
)

const createPostPath = (slug, date) => {
    const yearPart = `${date.getFullYear()}`
    const month = date.getMonth() + 1
    const monthPart = month < 10 ? `0${month}` : `${month}`
    const day = date.getDate()
    const dayPart = day < 10 ? `0${day}` : `${day}`
    return path.join(__dirname, 'src/posts', yearPart, monthPart, dayPart, slug)
}


const createPostContext = (node) => {
    const {slug, title, date} = node.frontmatter
    if (isBlank(title)) throw Error(`Missing title ${slug}`)
    if (date === null) throw Error(`Missing date ${slug}`)
    const postDate = new Date(date)
    if (isNaN(postDate)) throw Error(`Invalid date format ${date}`)
    const pathSlug = isBlank(slug) ? createTitleSlug(title) : slug
    const postPath = createPostPath(pathSlug, postDate)
    return Object.assign(
        node.frontmatter, {
            slug: pathSlug,
            postPath
        },
        {html: node.html})
}

exports.createPages = async ({actions, graphql, reporter}) => {
    const {createPage} = actions
    const postTemplate = require.resolve(`./src/templates/post-template.js`)

    const query = `{
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug,
              date,
              title,
              status
            }
            html
          }
        }
      }
    }`
    const result = await graphql(query)
    if (result.errors) {
        reporter.panicOnBuild('Error while running GraphQL query.')
        process.exit(1)
    }
    const {data: {allMarkdownRemark: {edges}}} = result
    const nodes = edges.map(e => createPostContext(e.node))
    nodes.forEach(n => {
        createPage({
            path: n.postPath,
            component: postTemplate,
            context: {
                slug: n.slug,
                date: n.date,
                title: n.title,
                html: n.html
            }
        })
    })

}
