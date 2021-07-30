import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const Post = ({ data }) => {
  // const post
  const post = data.markdownRemark
  return (
    <Layout>
      <article className="mt-5">
        <div className="container">
          <h3>
            {post.frontmatter.title}
            <div className="heading-line"></div>
            <p className="lead">{post.frontmatter.author}</p>
          </h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          <Link
            to="/markdown"
            className="text-decoration-none btn btn-outline-secondary p-2 mt-2"
          >
            Back
          </Link>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query getSinglePost($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        title
      }
      html
    }
  }
`

export default Post
