import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//import states
import options from './options.js';
import descriptorDetails from './descriptorDetails.js';
import character from './character.js';

let reducers = combineReducers({ options, descriptors: descriptorDetails, character });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();