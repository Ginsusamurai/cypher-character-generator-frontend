import produce from 'immer';
import thunk from 'redux-thunk';

const initialState = ['nerp'];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type){
    case "OPTION_FETCH_SUCCESS":{
      console.log('fuck', payload);
      console.log('see ya');
      // return produce(state, draftState => {
      //   let descriptors = payload.descriptorArray?.reduce((acc, val, ind) => {
      //     console.log('fuck', val);
      //     let single = val.descriptor_name;
      //     acc.push(single);
      //     return acc;
      //   },[])
      //   draftState = descriptors;
      // })
    }
    default:{
      return state;
    }
  }
}