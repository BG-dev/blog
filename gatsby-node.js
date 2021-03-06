const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('./src/templates/BlogPost.jsx')
    resolve(
      graphql(`
        {
          allContentfulBlog (limit:100){
            edges {
              node {
                title
                content {
                  content
                }
                authorAvatarImage{
                  gatsbyImageData
                }
                authorName
                creationDate
              }
            }
          }
        }
      `).then((result) => {
        if(result.errors){
          reject(result.errors)
        }
        result.data.allContentfulBlog.edges.forEach(edge => {
          createPage({
            path: edge.node.title,
            component: blogPostTemplate,
            context: {
              title: edge.node.title
            }
          })
        })
        return
      })
    )
  }) 
}
