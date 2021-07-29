import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

const Blog = ({ data }) => {
  const blog = data.contentfulBlog
  const { date, title, posts } = blog
  return (
    <Layout>
      <article className="container">
        <h3 className="mt-5">{title}</h3>
        <p className="lead">{date}</p>
        <div className="mt-2 p-2">
          <p>{renderRichText(posts, options)}</p>
        </div>
        <Link
          to="/blogs"
          className="text-decoration-none btn btn-primary p-2 mt-4"
        >
          Back Blogs
        </Link>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query getSingleBlog($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      date
      title
      posts {
        references {
          ... on ContentfulBlog {
            slug
            contentful_id
            title
          }
          ... on ContentfulAsset {
            gatsbyImageData
            contentful_id
            title
          }
        }
        raw
      }
    }
  }
`

export default Blog
