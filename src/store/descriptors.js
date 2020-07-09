import produce from 'immer';
import thunk from 'redux-thunk';

const initialState = ['nerp'];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type){
    case "OPTION_FETCH_SUCCESS":{
      console.log('fuck', payload);
      let x = payload.descriptorArray?.reduce((acc, val, ind) => {
            console.log('fuck', val);
            let single = val.descriptor_name;
            acc.push(single);
            return acc;
          },[])
        return x;
        }

      
      // return produce(state, draftState => {
      //   let descriptors = payload.descriptorArray?.reduce((acc, val, ind) => {
      //     console.log('fuck', val);
      //     let single = val.descriptor_name;
      //     acc.push(single);
      //     return acc;
      //   },[])
      //   console.log('final list', descriptors);
      //   draftState = descriptors;
      //   console.log('huh?', draftState);
      // })
    
    default:{
      return state;
    }
  }
}