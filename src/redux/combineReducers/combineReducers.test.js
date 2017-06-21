import combineReducers from './combineReducers';
describe('combineReducers', () => {

  const currentCount = (state = 0, action) => {
    switch(action.type){
      case "INCREASE_COUNTER":
        return state + 1;
      case "DECREASE_COUNTER":
        return state -1;
      default:
        return state;
    }
  }

  const currentWord = (state = "", action) => {
    switch(action.type){
      case "CHANGE_WORD":
        return action.newWord;
      default:
        return state;
    }
  }

  const increaseCounter = {type: "INCREASE_COUNTER"}
  const decreaseCounter = {type: "DECREASE_COUNTER"}
  const changeWord = (word) => {return {type: "CHANGE_WORD", newWord: word}}



  it('returns a combined reducer object that maps state keys to reducers', () => {
    const reducer = combineReducers({currentCount,currentWord});

    expect(typeof reducer).toEqual("function");
    const state = reducer({}, increaseCounter);
    expect(state.currentCount).toBe(1)
    expect(state.currentWord).toBe("")

    const newState = reducer(state, changeWord("helloWorld"));
    expect(newState.currentCount).toBe(1)
    expect(newState.currentWord).toBe("helloWorld")
  });
});
