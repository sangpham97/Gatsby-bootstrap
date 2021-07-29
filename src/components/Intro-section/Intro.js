import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { FaPlayCircle } from "react-icons/fa"

const Intro = ({ OpenVideo, setOpenVideo }) => {
  return (
    <section id="home" className="intro-section">
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5 display-3">
          <div className="col-10 col-sm-8 col-lg-6 ">
            <div className="video-box">
              <StaticImage
                src="../../images/intro.png"
                alt="intro"
                layout="fullWidth"
              />
              <span>
                <FaPlayCircle onClick={() => setOpenVideo(!OpenVideo)} />
              </span>
            </div>
          </div>
          <div className="col-lg-6 info">
            <h1 className="display-5 fw-bold lh-1  ">Hi! I'm Sang</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              nostrum modi autem vitae eaque molestiae corporis nam accusantium
              ipsum debitis!
            </p>
            <div className="mt-2">
              <button
                type="button"
                className="btn btn-secondary btn-lg px-4 me-md-2"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
