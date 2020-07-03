import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { tester, reset } from '../../store/options.js';


const Options = props => {
  console.log(props);
  return (
    <div>Hello fucking WORLD!
      <button onClick={() => props.test_it()}>I LIVE!</button>
      <button onClick={() => props.reset_me()}>I DIE!</button>
    </div>
  )
}

const mapStateToProps = state => ({
  options: state.options
})

const mapDispatchToProps = (dispatch) => ({
  reset_me: () => dispatch(reset()),
  test_it: () => dispatch(tester()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Options)