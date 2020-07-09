import produce from 'immer';
import thunk from 'redux-thunk';

// require('dotenv').config();

const API = process.env.REACT_APP_API;

const initialState = {
  descriptorArray: [{descriptor_name: "none1"}],
  typeArray:[{type_name:"none2"}],
  focusArray:[{focus_name:"none3"}],
};

export default (state = JSON.parse(JSON.stringify(initialState)), action) => {
  let {type, payload } = action;
  return produce(state, draftState => {
    switch(type){
      case "TEST":{
        draftState.mysteryOption = 'i am a banana!';
        draftState.typeArray[0].type_name = "no thank you";
        break;
      }
      case "RESET":{
        draftState = initialState;
        break;
      }
      case "OPTION_FETCH_SUCCESS":{
          draftState.descriptorArray = payload.descriptorArray.reduce((acc,val,ind) => {
            acc.push(val.descriptor_name);
            return acc;
          },[]);
          draftState.typeArray = payload.typeArray.reduce((acc,val,ind) => {
            acc.push(val.type_name);
            return acc;
          },[]);;
          draftState.focusArray = payload.focusArray.reduce((acc,val,ind) => {
            acc.push(val.focus_name);
            return acc;
          },[]);;
        }
      default:
        return draftState;
    }
  })
}

export const fetchOptions = (endpoint) => dispatch => {
  fetch(`${API}/${endpoint}`)
    .then( response => 
      response.json())
    .then(data => {
      dispatch(fetchSuccess(data));
    })
    .catch(e => console.log('fetch error', e));
}

export const fetchSuccess = payload => {
  return {
    type: "OPTION_FETCH_SUCCESS",
    payload: payload,
  }
}

export const fetchFail = () => {
  return {
    type: "OPTION_FETCH_FAIL"
  }
}

export const tester = () => {
  return {
    type: "TEST"
  }
}

export const reset = () => {
  return {
    type: "RESET"
  }
}

