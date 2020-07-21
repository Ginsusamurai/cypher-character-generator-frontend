import produce from 'immer';
import thunk from 'redux-thunk';

const API = process.env.REACT_APP_API;

const initialState ={
  characterName: "nameless",
  descriptor: "desc",
  type: "typ",
  focus: "foc",
  tier: "tierish",
  effort: "eff",
  mightPool: "mCur",
  mightPoolBonus: "mBns",
  mightPoolMax: "mMax",
  mightEdge: "mEdge",
  speedPool: "sCur",
  speedPoolMax: "sMax",
  speedPoolBonus: "sBns",
  speedEdge: "sEdge",
  intellectPool: "iCur",
  intellectPoolMax: "iMax",
  intellectPoolBonus: "iBns",
  intellectEdge: "iEdge",
  edgeLimit: "eLim",
  bonusPool: "bnsPool",
  xp:"xp#",
  recovery:{
    action:1, 
    mins:1, 
    hour:1, 
    hours:1
    },
  impaired: false,
  debilitated: false,
  skills:{
    //name, pool, t/s/i
    might:[],
    speed:[],
    intellect:[]
    },
  advancement:{
    poolIncrease:false,
    edgeIncrease:false,
    effortIncrease:false,
    skillIncrease:false,
    other:false,
    total: 0,
    },
  abilities:[],
  abilityLimit:"abLim",
  attacks:[],
  weaponTraining:{
    light: null,
    medium: null,
    heavy: null
  },
  cyphers:{
    cypherList:[],
    cypherLimit: "null",
    cypherCount: 0,
  },
  equipment:[],
  equipmentDescription:"eqDesc",
  armor: "null",
  money: "null"
}

export default (state = JSON.parse(JSON.stringify(initialState)), action) => {
  let {type, payload } = action;
  return produce(state, draftState => {
    switch(type){
      case "SET NAME":{
        draftState.characterName = payload;
        break;
      }
      case "SET SELECTOR": {
        draftState[payload.selector] = payload.value;
        break;
      }
      case "SET TYPE DETAILS":{
        
        draftState.mightPoolMax = payload.might;
        draftState.speedPoolMax = payload.speed;
        draftState.intellectPoolMax = payload.intellect;
        draftState.effort = payload.effort;
        draftState.bonusPool = payload.extra;
        [draftState.mightEdge,
          draftState.speedEdge,
          draftState.intellectEdge] = payload.edge.split("/");
          draftState.edgeLimit = payload.edge_limit;
        draftState.cyphers.cypherLimit = payload.cypher;
        draftState.abilityLimit = payload.abilities;
        draftState.equipmentDescription = payload.starting_items;
        [draftState.weaponTraining.light,
          draftState.weaponTraining.medium,
          draftState.weaponTraining.heavy] = payload.weapons.split('/').reduce((acc,val) => {
                                                  acc.push(val !== 'x' ? true : false);
                                                  return acc;},[]);
        
      }
      case "COMPUTE POOLS":{

        let [mBonus, sBonus, iBonus] = [0,0,0];
        
        if(state.optionDetails?.length > 0){

         let y = state.optionDetails.descriptorDetails?.forEach((descriptor) =>{
            if(descriptor.descriptor_skill_type === "might pool"){
              mBonus += descriptor.descriptor_skill_value;
            }
            if(descriptor.descriptor_skill_type === "speed pool"){
              sBonus += descriptor.descriptor_skill_value;
            }
            if(descriptor.descriptor_skill_type === "int pool"){
              iBonus += descriptor.descriptor_skill_value;
            }
          })
          
        } 

        draftState.mightPoolBonus = mBonus;
        draftState.speedPoolBonus = sBonus;
        draftState.intellectPoolBonus = iBonus;
      }
      case "ASSEMBLE SKILLS":{
        let skills = [];
        if(state.optionDetails.length > 0){
        let y = state.optionDetails.descriptorDetails?.forEach((_val) =>{
            if(_val.descriptor_skill_type === "skill"){
              skills.push(_val.descriptor_skill_value);
            }
          })
          
        }
      }
      default:
        return draftState;
    }
  })
}

export const setName = (payload) => {
  return {
    type: "SET NAME",
    payload: payload
  }
}

export const setSelector = (payload) => {
  return {
    type: "SET SELECTOR",
    payload: payload,
  }
}
