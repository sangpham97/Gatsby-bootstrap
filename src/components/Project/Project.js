import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Project = ({ id, title, image, detail, slug }) => {
  const img = getImage(image)
  console.log(img)
  return (
    <>
      <div className="col-md-4 col-sm-6" key={id}>
        <Link to={`/${slug}`} className="text-decoration-none text-secondary">
          <div className="card shadow-lg">
            <GatsbyImage
              image={img}
              alt="image"
              className="card-img-top"
            ></GatsbyImage>
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text">{detail}</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Project
