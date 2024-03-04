const redux = require('redux');


const INITIAL_VALUE = {
    counter: 0
}



//!  reducer function
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if (action.type === "INCREMENT") {
        console.log("Reducer called : ", action.type)
        newStore = { counter: store.counter + 1 }
    }else if (action.type === "DECREMENT"){
        console.log("Reducer called : ", action.type)
        newStore = {counter: store.counter -1}
    }else if(action.type === "ADDITION"){
        console.log("Reducer called : ", action.type)
        newStore = {counter: store.counter + action.payload.number}
    }
    return newStore;
}

const store = redux.createStore(reducer)

//! subscriber function
const subscriber = () => {
    const state = store.getState();
    console.log(state);
}
store.subscribe(subscriber);


//! dispatch function 
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADDITION' , payload: {number: 7}});
store.dispatch({ type: 'DECREMENT' });
