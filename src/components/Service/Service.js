import Image1 from "../../images/services/service-1.png"
import Image2 from "../../images/services/service-2.png"
import Image3 from "../../images/services/service-3.png"
import React from "react"
import { BiPaperPlane } from "react-icons/bi"
import { BsFillCloudFill } from "react-icons/bs"
import { BsLink45Deg } from "react-icons/bs"

const services = [
  {
    id: 1,
    icon: <BsLink45Deg />,
    title: "web developer",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid dignissimos laborum dolor deserunt accusantium distinctio, voluptates repellat consequuntur iste optio culpa minus ullam impedit porro facere sed facilis earum.",
    img: Image1,
  },
  {
    id: 2,
    icon: <BsFillCloudFill />,
    title: "cloud hosting",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid dignissimos laborum dolor deserunt accusantium distinctio, voluptates repellat consequuntur iste optio culpa minus ullam impedit porro facere sed facilis earum.",
    img: Image2,
  },
  {
    id: 3,
    icon: <BiPaperPlane />,
    title: "marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, aliquid dignissimos laborum dolor deserunt accusantium distinctio, voluptates repellat consequuntur iste optio culpa minus ullam impedit porro facere sed facilis earum.",
    img: Image3,
  },
]

const Service = () => {
  return (
    <div className="container mt-3">
      {services.map(service => {
        const { id, icon, title, desc, img } = service
        return (
          <article key={id}>
            <div className="row g-3 align-items-center justify-content-center">
              <div className="col-md-6">
                <h2 className="fw-bold text-capitalize text-primary">
                  {icon}
                  <span className="mx-2 ">{title}</span>
                </h2>
                <p className="lead">{desc}</p>
              </div>
              <div className="col-md-6">
                <img
                  src={img}
                  className="img-fluid w-100 d-none d-sm-block"
                  alt=""
                ></img>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default Service
