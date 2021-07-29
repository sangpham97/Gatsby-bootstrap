import { Link } from "gatsby"
import React from "react"

const Footer = () => {
  return (
    <footer>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,224L48,224C96,224,192,224,288,197.3C384,171,480,117,576,128C672,139,768,213,864,256C960,299,1056,309,1152,282.7C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="container">
        <div className=" pt-5 pb-5">
          <div className="container">
            <div className="row text-center text-white">
              <div className="col-12">
                <div>
                  © Copyright 2021{" "}
                  <Link
                    to="/"
                    className="text-decoration-none text-primary text-uppercase"
                  >
                    Company
                  </Link>{" "}
                  | Created by Sang
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
