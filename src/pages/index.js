import React, { useState } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Intro from "../components/Intro-section/Intro"
import Companies from "../components/companies/Companies"
import Video from "../components/video/Video"
import Services from "../components/Services/Services"
import Testimonial from "../components/Testimonial/Testimonial"
import Portfolio from "../components/portfolio/Portfolio"
import GetStarted from "../components/getStarted/GetStarted"

const IndexPage = () => {
  const [OpenVideo, setOpenVideo] = useState(false)
  return (
    <Layout>
      <Seo title="Home" />
      <Intro OpenVideo={OpenVideo} setOpenVideo={setOpenVideo} />
      {OpenVideo && (
        <Video
          videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
          videoTitle="Official Music Video on YouTube"
          OpenVideo={OpenVideo}
          setOpenVideo={setOpenVideo}
        />
      )}
      <Companies />
      <Services />
      <Testimonial />
      <Portfolio />
      <GetStarted />
    </Layout>
  )
}

export default IndexPage
