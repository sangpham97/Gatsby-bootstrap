import React from "react"
import Service from "../Service/Service"

const Services = () => {
  return (
    <section id="services" className="our-services mt-md-5">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-5 fw-bold">Our Services</h1>
          <div className="heading-line mb-5"></div>
        </div>
        <div className="row pt-2 pb-2 mb-3">
          <div className="col-md-6 border-right">
            <div className="bg-white p-3 ">
              <h2 className="fw-bold text-catapalize text-center">
                Our services Range from initial Design to Deployment anywhere
                anytime
              </h2>
            </div>
          </div>
          <div className="col-md-6">
            <div className="bg-whte p-4 text-start">
              <p className="fw-light">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
                voluptatum autem doloribus repellat id deserunt dolores
                aspernatur quod harum nobis!
              </p>
            </div>
          </div>
          <Service />
        </div>
      </div>
    </section>
  )
}

export default Services
