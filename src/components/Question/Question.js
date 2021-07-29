import React from "react"

const Question = ({ id, title, info }) => {
  const [Toggle, setToggle] = React.useState(false)
  return (
    <div className="accordion-item" key={id}>
      <h2 className="accordion-header" onClick={() => setToggle(!Toggle)}>
        <button className="accordion-button" type="button">
          {title}
        </button>
      </h2>
      {Toggle && <div className="accordion-body ">{info}</div>}
    </div>
  )
}

export default Question
