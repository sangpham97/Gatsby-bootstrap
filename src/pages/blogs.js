import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"

export default function Blogs() {
  const data = useStaticQuery(graphql`
    {
      allContentfulBlog {
        nodes {
          date(formatString: "MMMM-Do-YYYY")
          desc
          title
          id
          slug
        }
      }
    }
  `)
  const blogs = data.allContentfulBlog.nodes
  console.log(blogs)

  return (
    <Layout>
      {
        <div className="mt-3">
          <div className="container">
            <h1 className="text-center display-5">
              My blog
              <div className="heading-line mt-2"></div>
            </h1>
            {blogs.map(blog => {
              const { title, id, desc, date, slug } = blog
              return (
                <article key={id} className="mt-5 shadow-lg p-2">
                  <div className="mt-1">
                    <h3 className="text-uppercase">
                      <Link
                        to={`/blogs/${slug}`}
                        className="text-decoration-none text-secondary"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="lead">{date}</p>
                  </div>
                  <p>{desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      }
    </Layout>
  )
}
