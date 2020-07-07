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
  
  useEffect(() => {
    props.get_options(OPTIONS_ENDPOINT);}
    ,[]);
    
  console.log('option props', props);
  console.log(props.options);

  let descriptors;
  let types;
  let foci;

  let testArray = ['dog', 'cat', 'van'];
  let name = 'beHOLD';
  let text = 'I am a ';

  return (
    <>
      <If condition={props.options.descirptorArray?.length > 1}>
        <Then>
          <Selector choices={props.options.descriptorArray} name={"descriptor"} text={"I am a "}/>
          <Selector choices={props.options.typeArray} name={"type"} text={", "}/>
          <Selector choices={props.options.focusAray} name={"focus"} text={" that "}/>
        </Then>
      </If>
      
    </>
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