import React from "react"

const Types = ({ allType, filterItems }) => {
  return (
    <div className="col-12 text-center">
      {allType.map(item => {
        console.log(item)
        return (
          <div
            className="btn btn-outline-primary text-capitalize mx-sm-2"
            onClick={e => filterItems(item)}
          >
            {item}
          </div>
        )
      })}
    </div>
  )
}

export default Types
