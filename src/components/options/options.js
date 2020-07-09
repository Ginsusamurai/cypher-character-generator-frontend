import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Selector from '../../genericComponents/selector/selector.js';
import { If, Then } from '../../genericComponents/if/if.js';



//store
import { tester, reset, fetchOptions  } from '../../store/options.js';
import { setName, setSelector } from '../../store/character.js';

require('dotenv').config();
const OPTIONS_ENDPOINT = process.env.REACT_APP_OPTIONS_ENDPOINT;

const Options = props => {

  let descriptors;
  let types;
  let foci;

  let testArray = ['dog', 'cat', 'van'];
  let name = 'beHOLD';
  let text = 'I am a ';

  function nameUpdate(e){
    props.set_name(e.target.value);
  }



  return (
    <div id="options" className="basicsComplete options bound pri-bound">
      <input type="text" id="name" onChange={nameUpdate}></input>
      <br/>
      <If condition={props.options.descriptorArray?.length > 1}>
      {/* <If condition={props.descriptors?.length > 1} > */}
        <Then>
          {/* <Selector choices={props.descriptors} name={"descriptor"} text={"I am a "}/> */}
           <Selector choices={props.options?.descriptorArray} default={"Adjective"} name={"descriptor"} text={"I am a "} changefunction={props.set_selector} changetarget={"descriptor"}/>
           <Selector choices={props.options?.typeArray} default={"Noun"} name={"type"} text={", "} changefunction={props.set_selector} changetarget={"type"}/>
           <Selector choices={props.options?.focusArray} default={"Verbs"} name={"focus"} text={" that "} changefunction={props.set_selector} changetarget={"focus"}/>
        </Then>
      </If>
      
    </div>
  )
}






const mapStateToProps = state => ({
  options: state.options,
  descriptors: state.descriptors,
  character: state.character
})

const mapDispatchToProps = (dispatch) => ({
  reset_me: () => dispatch(reset()),
  test_it: () => dispatch(tester()),
  get_options: (endpoint) => dispatch(fetchOptions(endpoint)),
  set_name:(name) => dispatch(setName(name)),
  set_selector: (payload) => dispatch(setSelector(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Options)