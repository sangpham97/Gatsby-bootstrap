import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AiFillPhone } from "react-icons/ai"
import { Link } from "gatsby"

const Header = () => {
  const [Toggle, setToggle] = React.useState(false)
  const [dropToggle, setDropToggle] = React.useState(false)
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark menu shadow-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <StaticImage
              src="../../images/logo.png"
              alt="logo"
              layout="fixed"
              width={50}
              height={50}
            ></StaticImage>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setToggle(!Toggle)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              Toggle
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse "
            }
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="text-decoration-none nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  faq
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#porfolio">
                  portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  contact
                </a>
              </li>
              <li
                className="nav-item dropdown"
                onClick={() => setDropToggle(!dropToggle)}
              >
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                >
                  My utilis
                </a>
                <ul
                  className={
                    dropToggle
                      ? "dropdown-menu show bg-primary"
                      : "dropdown-menu bg-primary"
                  }
                >
                  <li>
                    <Link className="dropdown-item " to="/blogs">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item " to="/markdown">
                      Mark Down
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="rounded-pill btn-rounded d-none d-md-block"
            >
              0973150912
              <span>
                <AiFillPhone />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
