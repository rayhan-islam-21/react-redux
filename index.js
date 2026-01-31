const INCREMENT = 'INCREMENT'
import { createStore } from 'redux';
const DECREMENT = 'DECREMENT'

const initialCounterState = {
    count: 0,
    username: 'Guest',
}

const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCOunter = () => {
    return {
        type: DECREMENT,
    }
}

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }



        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }


        default:
            return state;
    }
}
//create a store
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log('State updated:', store.getState());
})

//dispatching actions
store.dispatch(incrementCounter());