import React from 'react'

const Person = (props, deletePerson) => {
    return (
      <li>{props.name}  {props.number} <button onClick={props.deletePerson}>Person</button></li>
    )
  }

  export default Person