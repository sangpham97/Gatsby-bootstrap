import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const Company = ({ image }) => {
  const img = getImage(image)

  return <GatsbyImage image={img} alt="company" />
}

export default Company
