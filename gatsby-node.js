const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allContentfulPortfolio {
        nodes {
          slug
        }
      }
      blogs: allContentfulBlog {
        nodes {
          slug
        }
      }
      posts: allMarkdownRemark(
        filter: { frontmatter: { author: { ne: null } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  result.data.products.nodes.forEach(product => {
    createPage({
      path: `/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })

  result.data.blogs.nodes.forEach(blog => {
    createPage({
      path: `/blogs/${blog.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: blog.slug,
      },
    })
  })
  result.data.posts.nodes.forEach(post => {
    createPage({
      path: `/markdown/${post.frontmatter.slug}`,
      component: path.resolve(`src/templates/markdown-template.js`),
      context: {
        slug: post.frontmatter.slug,
      },
    })
  })
}
