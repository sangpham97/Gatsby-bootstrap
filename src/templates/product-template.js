import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProductDetails = ({ data }) => {
  console.log(data.contentfulPortfolio)
  const { date, title, type } = data.contentfulPortfolio
  const { desc } = data.contentfulPortfolio.desc
  const { description } = data.contentfulPortfolio.image
  const img = getImage(data.contentfulPortfolio.image)
  return (
    <Layout>
      <div className="container mt-5">
        <h1>{title}</h1>
        <p className="lead text-uppercase">Type: {type}</p>
        <p>{date}</p>
        <GatsbyImage image={img} alt="image"></GatsbyImage>
        <p className="lead text-center mt-3">
          {description}
          <div className="heading-line"></div>
        </p>
        <p>{desc}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleItem($slug: String) {
    contentfulPortfolio(slug: { eq: $slug }) {
      date
      desc {
        desc
      }
      detail
      image {
        gatsbyImageData(layout: FULL_WIDTH)
        description
      }
      title
      type
    }
  }
`

export default ProductDetails
