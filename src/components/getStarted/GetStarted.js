import React from "react"
import { BiCheck } from "react-icons/bi"

const GetStarted = () => {
  return (
    <section id="contact" className="get-started">
      <div className="container">
        <div className="row text-center">
          <h1 className="display-3 fw-bold text-capitalize">
            get started
            <div className="heading-line"></div>
          </h1>
          <p className="lead">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
            asperiores.
          </p>
        </div>
        <div className="row text-white mt-3">
          <div className="col-12 col-lg-6 gradient shadow p-3">
            <div className="cta-content w-100">
              <h4 className="display-4 fw-bold">100% sastisfaction</h4>
              <p className="lh-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                nisi optio, itaque architecto quas perferendis placeat est.
                Consequuntur optio accusamus similique!
              </p>
              <h3 className="display-3--brief">what will be the next step</h3>
              <ul className="cta-info__list">
                <li className="">
                  <span>
                    <BiCheck />
                  </span>
                  we'll prepare proposal
                </li>
                <li className="">
                  <span>
                    <BiCheck />
                  </span>
                  we'll prepare proposal
                </li>
                <li className="">
                  <span>
                    <BiCheck />
                  </span>
                  we'll prepare proposal
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-lg-6 bg-white shadow p-3">
            <h4 className="display-3--title mb-5 text-primary text-capitalize">
              start your project
            </h4>
            <form className="row">
              <div className="col-6 mb-3">
                <input
                  type="text"
                  className="form-control-lg form-control"
                  id="inputFirstName"
                  placeholder="First Name"
                />
              </div>
              <div className="col-6 mb-3">
                <input
                  type="text"
                  className="form-control-lg form-control"
                  id="inputLastName"
                  placeholder="LastName"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control-lg form-control "
                  id="inputElementName"
                  placeholder="email"
                />
                <textarea
                  name="message"
                  id=""
                  rows="5"
                  className="w-100 mt-3 form-control-lg form-control"
                  placeholder="Text Here"
                ></textarea>
                <div className="text-center d-grid mt-3">
                  <button className="btn btn-primary rounded-pill text-uppercase p-2">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetStarted
