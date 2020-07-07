import React from 'react';

const Selector = props => {

  return (
    <>
      <label key={props.name} htmlFor={props.name}>{props.text}</label>
      <select name={`${props.name}1`} id={props.name}>
        {props.choices.map((val, ind) => {
          return <option key={ind} value={val}>{val}</option>
        })}
      </select>
    </>
  )
}

export default Selector;