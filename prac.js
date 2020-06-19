import { createStore } from 'redux';

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
const store = createStore(Reducer1);

console.log(store)