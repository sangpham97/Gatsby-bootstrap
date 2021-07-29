import React from "react"
import Faq from "../Faq/Faq"

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="testimonial ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L288,0L576,128L864,256L1152,224L1440,96L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
          ></path>
        </svg>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <h1 className="display-5 text-center fw-bold">
              Testimonial
              <span className="heading-line mb-3"></span>
              <p className="lead">what our clients are saying</p>
            </h1>
            <Faq />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,192L288,0L576,128L864,256L1152,224L1440,96L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  )
}

export default Testimonial
