import produce from 'immer';
import thunk from 'redux-thunk';

const API = process.env.REACT_APP_API;
const DESCRIPTOR_ENDPOINT = process.env.REACT_APP_DESCRIPTOR_ENDPOINT;
const FOCUS_ENDPOINT = process.env.REACT_APP_FOCUS_ENDPOINT;
const TYPE_ENDPOINT = process.env.REACT_APP_TYPE_ENDPOINT;



const initialState = {
  descriptorDetails:[],
  typeDetails:{},
  focusDetails:[]
};

export default (state = JSON.parse(JSON.stringify(initialState)), action) => {
  let {type, payload } = action;
  return produce(state, draftState => {
    switch(type){
      case "SET DESCRIPTOR DETAILS":{
        console.log('in desc', payload);
        draftState.descriptorDetails = payload;
        break;
      }
      case "SET FOCUS DETAILS":{
        console.log(payload);
        draftState.focusDetails = payload;
        break;
      }
      case "SET TYPE DETAILS":{
        console.log(payload);
        for(let x in payload){
          console.log('x',x, payload[x]);
          draftState.typeDetails[x] = payload[x];
        }
        break;
      }
      default:
        return draftState;
    }
  })
}


export const fetchDescriptorDetails = (descriptor) => dispatch => {
  console.log('hrm', `${API}/${DESCRIPTOR_ENDPOINT}/${descriptor}`);
  fetch(`${API}/${DESCRIPTOR_ENDPOINT}/${descriptor}`)
    .then( response => {
      // console.log(response.json());
      return response.json();
    })
    .then( data => {
      dispatch(fetchDescriptorDetailsSuccess(data));
    })
    .catch( e => console.log('descriptor fetch error', e));
}

export const fetchDescriptorDetailsSuccess = payload => {
  return {
    type: "SET DESCRIPTOR DETAILS",
    payload: payload,
  }
}

export const fetchFocusDetails = (focus) => dispatch => {
  fetch(`${API}/${FOCUS_ENDPOINT}/${focus}`)
    .then( response => {
      return response.json();
    })
    .then( data => {
      dispatch(fetchFocusDetailsSuccess(data));
    })
    .catch( e => console.log('focus fetch error', e));
}

export const fetchFocusDetailsSuccess = payload => {
  return {
    type: "SET FOCUS DETAILS",
    payload: payload,
  }
}

export const fetchTypeDetails = (type) => dispatch => {
  fetch(`${API}/${TYPE_ENDPOINT}/${type}`)
    .then( response => {
      return response.json();
    })
    .then( data => {
      dispatch(fetchTypeDetailsSuccess(data[0]));
    })
    .catch( e => console.log('type fetch error', e));
}

export const fetchTypeDetailsSuccess = payload => {
  return {
    type: "SET TYPE DETAILS",
    payload: payload,
  }
}