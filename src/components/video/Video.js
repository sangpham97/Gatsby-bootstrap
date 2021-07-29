import React from "react"
import { AiOutlineClose } from "react-icons/ai"

const Video = ({ videoSrcURL, videoTitle, OpenVideo, setOpenVideo }) => (
  <div className="video">
    <div className="row d-flex  justify-content-center m-4 h-100">
      <div className="col-12 col-md-10 mt-5">
        <span>
          <AiOutlineClose onClick={() => setOpenVideo(!OpenVideo)} />
        </span>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          className="w-100"
        />
      </div>
    </div>
  </div>
)
export default Video
