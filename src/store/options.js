import produce from 'immer';
require('dotenv').config();

let API = process.env.API;

let initialState = {
  descriptorArray: [{descriptor_name: "none1"}],
  typeArray:[{type_name:"none2"}],
  focusArray:[{focus_name:"none3"}],
};

export default (state = JSON.parse(JSON.stringify(initialState)), action) => {
  let { type, payload } = action;

  switch(type){
    case "TEST":{
      return produce(state, draftState => {
        draftState.mysteryOption = 'i am a banana!';
        draftState.typeArray[0].type_name = 'no thank you evil!';
      })
    }
    case "RESET":{
      return initialState;
    }
    default:{
      return state;
    }
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

// export default reducer;