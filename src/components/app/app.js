import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { tester, reset, fetchOptions } from '../../store/options.js';
import Option from '../options/options.js';
import descriptors from '../../store/descriptorDetails.js';
import Stats from '../stats/stats.js';

const OPTIONS_ENDPOINT = process.env.REACT_APP_OPTIONS_ENDPOINT;


const App = props => {

  useEffect(() => {
    props.get_options(OPTIONS_ENDPOINT);
    // forceUpdate();
    },[]);

  return (
    <div id="App">
      {/* Hello fucking WORLD! */}
      {/* <button onClick={() => props.test_it()}>I LIVE!</button>
      <button onClick={() => props.reset_me()}>I DIE!</button> */}
      <Option />
      {/* <div className="stats bound">stats</div> */}
      <Stats />
      <div className="status bound">
        <div className="recovery bound">recovery</div>
        <div className="damageTrack bound">damageTrack</div>
      </div>
      
      <div className="skills bound">skills</div>
      <div className="advancement bound">advancement</div>
      <div className="abilities bound">abilities</div>
      {/* <div className="portrait bound">portrait</div> */}
      <div className="attacks bound">attacks</div>
      <div className="marquee bound">marquee</div>
      <div className="cyphers bound">cyphers</div>
      <div className="equipment bound">equipment</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(App)