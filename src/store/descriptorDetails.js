import produce from 'immer';
import thunk from 'redux-thunk';

const initialState = ['nerp'];
const API = process.env.REACT_APP_API;



export default (state = JSON.parse(JSON.stringify(initialState)), action) => {
  let {type, payload } = action;
  return produce(state, draftState => {
    switch(type){
      case "DESCRIPTOR DETAILS":{
        break;
      }
      default:
        return draftState;
    }
  })
}


export const fetchDescriptorDetails = (endpoint) => dispatch => {
  fetch(`${API}/${endpoint}`)
    .then( response => {
      response.json();
    })
    .then( data => {
      dispatch(fetchSuccess(data));
    })
    .catch( e => console.log('descriptor fetch error', e));
}

export const fetchSuccess = payload => {
  return {
    type: "SET DESCRIPTOR DETAILS",
    payload: payload,
  }
}