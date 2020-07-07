import React, { useEffect }from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { tester, reset, fetchOptions  } from '../../store/options.js';
import Selector from '../../genericComponents/selector/selector.js';
import { If, Then } from '../../genericComponents/if/if.js';
import descriptors from '../../store/descriptors.js';


require('dotenv').config();
const OPTIONS_ENDPOINT = process.env.REACT_APP_OPTIONS_ENDPOINT;

const Options = props => {
  
  // useEffect(() => {
  //   props.get_options(OPTIONS_ENDPOINT);}
  //   ,[]);
    
  console.log('option props', props);
  console.log(props.options);

  let descriptors;
  let types;
  let foci;

  let testArray = ['dog', 'cat', 'van'];
  let name = 'beHOLD';
  let text = 'I am a ';

  return (
    <div id="options" className="options bound pri-bound">
      <If condition={props.options.descriptorArray?.length > 1}>
      {/* <If condition={props.descriptors?.length > 1} > */}
        <Then>
          {/* <Selector choices={props.descriptors} name={"descriptor"} text={"I am a "}/> */}
           <Selector choices={props.options?.descriptorArray} default={"Adjective"} name={"descriptor"} text={"I am a "}/>
           <Selector choices={props.options?.typeArray} default={"Noun"} name={"type"} text={", "}/>
           <Selector choices={props.options?.focusArray} default={"Verbs"} name={"focus"} text={" that "}/>
        </Then>
      </If>
      
    </div>
  )
}






const mapStateToProps = state => ({
  options: state.options,
  descriptors: state.descriptors,
})

const mapDispatchToProps = (dispatch) => ({
  reset_me: () => dispatch(reset()),
  test_it: () => dispatch(tester()),
  get_options: (endpoint) => dispatch(fetchOptions(endpoint)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Options)