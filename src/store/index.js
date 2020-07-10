import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//import states
import options from './options.js';
import character from './character.js';
import optionDetails from './optionDetails.js';
// import focusDetails from './focusDetails.js';
// import typeDetails from './typeDetails.js';


let reducers = combineReducers({ options, optionDetails, character });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
}

export default store();