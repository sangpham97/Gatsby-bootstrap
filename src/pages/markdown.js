import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const MarkDown = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { author: { ne: null } } }) {
        nodes {
          frontmatter {
            author
            desc
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: FIXED, width: 100)
              }
            }
          }
        }
      }
    }
  `)
  const blogs = data.allMarkdownRemark.nodes

  // const blogs = data.
  return (
    <Layout>
      <article className="mt-5">
        <div className="container">
          <div className="row ">
            {blogs.map(blog => {
              const { author, title, desc, slug, image } = blog.frontmatter
              const img = getImage(image)
              return (
                <Link
                  to={`/markdown/${slug}`}
                  className="text-decoration-none text-dark "
                >
                  <div className="col-12 col-md-8 m-2 shadow-lg p-2 mx-auto">
                    <div className="row mx-auto">
                      <div className="col-4 col-md-2">
                        <GatsbyImage image={img} alt="image" />
                      </div>
                      <div className="col-8 col-md-6">
                        <h3>{title}</h3>
                        <p className="lead">{author}</p>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default MarkDown
