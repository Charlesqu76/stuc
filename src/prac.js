const redux = require('redux');


function Reducer1(state = 0, action) {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    case 'REDUCE':
      return state - 1;
    default:
      return state;
  }
}

const ALLREDUCER = redux.combineReducers({
  reducer1: Reducer2,
  reducer2: Reducer1
})

function Reducer2(state = {
  name: "Chalres"
}, action) {
  switch (action.type) {
    case 'RENAME':
      return state.name = action.payload;
    default:
      return state;
  }
}
const store = redux.createStore(ALLREDUCER);
store.dispatch({
  type: 'ADD'
});

console.log(store.getState())

store.dispatch({
  type: 'ADD'
});
store.dispatch({
  type: 'RENAME',
  payload: "adads",
})
console.log(store.getState())