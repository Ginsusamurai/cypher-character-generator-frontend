import React from 'react';

const Selector = props => {
  console.log('choices?', props.name, props.choices);

  return (
    <>
      <label key={props.name} htmlFor={props.name}>{props.text}</label>
      <select name={`${props.name}1`} id={props.name}>
        <option selected disabled>{props.default}</option>
        {props.choices.map((val, ind) => {
          return <option key={ind} value={val}>{val}</option>
        })}
      </select>
    </>
  )
}

export default Selector;