import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Project from "../Project/Project"
import Types from "../Types/Types"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPortfolio {
        nodes {
          image {
            gatsbyImageData(layout: CONSTRAINED)
            title
          }
          detail
          type
          title
          slug
        }
      }
    }
  `)
  const projects = data.allContentfulPortfolio.nodes
  const allType = ["all", ...new Set(projects.map(project => project.type))]
  const [menuItems, setMenuItems] = useState(projects)

  const filterItems = type => {
    if (type === "all") {
      setMenuItems(projects)
      return
    }
    const newItems = projects.filter(item => item.type === type)
    setMenuItems(newItems)
  }
  console.log(allType)
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className=" mt-5">
          <h1 className="display-5 fw-bold text-center">
            Lasted Work
            <div className="heading-line mt-2"></div>
          </h1>
          <p className="lead mt-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
            cum sit earum! Vel porro dolorem alias quis. Reiciendis, saepe
            asperiores.
          </p>
        </div>
        <div className="row mb-3">
          <Types filterItems={filterItems} allType={allType} />
        </div>
        <div className="row g-3">
          {menuItems.map(project => {
            return <Project {...project} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
