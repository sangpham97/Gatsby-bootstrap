import React from "react"
import Question from "../Question/Question"
import data from "../../data"
const Faq = () => {
  const [question] = React.useState(data)
  console.log(question)
  return (
    <section className="container Faq my-3" id="faq">
      <div className="accordion">
        {question.map((item, index) => {
          return <Question key={index} {...item} />
        })}
      </div>
    </section>
  )
}

export default Faq
