import {combineReducers} from 'redux';

function currentCount(state = 0 , action){
  switch(action.type){
    case "INCREASE_COUNTER":
     return state + 1;
    case "DECREASE_COUNTER":
      return state - 1;
    default:
      return state;
  }
}

function currentWord(state = "", action){
  switch(action.type){
    case "CHANGE_WORD":
      return action.newWord;
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  currentCount,
  currentWord
 });

 export default rootReducer;
