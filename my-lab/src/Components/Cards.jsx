import React from "react"
import icon1 from "./../images/icon1.png"
import icon2 from "./../images/icon2.png"
import icon3 from "./../images/icon3.png"
import icon4 from "./../images/icon4.png"

const Cards = () => {
  return (
    <div className="Cards">
      <div className="item">
        {" "}
        <img src={icon1} width="100" alt="icon" />
        <h2>Declarative</h2>
        <p className="cardtext">
          React makes it painless to create interactive UIs
        </p>
      </div>
      <div className="item">
        {" "}
        <img src={icon2} width="100" alt="icon" />
        <h2>Components</h2>
        <p className="cardtext">
          Build encapsulated components that manage their state
        </p>
      </div>
      <div className="item">
        {" "}
        <img src={icon3} width="100" alt="icon" />
        <h2>Single-Way</h2>
        <p className="cardtext">
          A set of immutable values are passed to the component's
        </p>
      </div>
      <div className="item">
        {" "}
        <img src={icon4} width="100" alt="icon" />
        <h2>JSX</h2>{" "}
        <p className="cardtext">
          Statically-typed, designed to run on modern browsers
        </p>{" "}
      </div>
    </div>
  )
}

export default Cards
