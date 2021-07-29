import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {} from "gatsby-plugin-image"
import Company from "../company/Company"

const Companies = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "companies" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 100)
          }
        }
      }
    }
  `)
  const images = data.allFile.nodes
  console.log(images)
  return (
    <section id="campanies" className="companies my-5">
      <div className="container">
        <h3 className="display-4 fw-bold lead mb-3 text-center">
          Trusted by companies like
        </h3>
        <span className="heading-line text-center"></span>
        <div className="row mt-5 g-4">
          {images.map(image => {
            return (
              <div className="col-6 col-sm-4 col-md-2">
                <Company image={image} key={image.id} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Companies
