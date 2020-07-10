import React from 'react';

const Selector = props => {

  function setterUpdate(e){
    let payload = {
      selector: props.changetarget,
      value: e.target.value, 
    }
    console.log('setterupdate', payload);
    props.changefunction(payload);
    props.getDetails && props.getDetails(payload.value);
  }


  return (
    <>
      <label key={props.name} htmlFor={props.name}>{props.text}</label>
      <select onChange={props.changefunction ? setterUpdate : undefined} name={`${props.name}1`} id={props.name}>
        <option selected disabled>{props.default}</option>
        {props.choices.map((val, ind) => {
          return <option  key={ind} value={val}>{val}</option>
        })}
      </select>
    </>
  )
}

export default Selector;