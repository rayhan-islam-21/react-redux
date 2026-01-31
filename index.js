import { createStore } from 'redux';
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const incrementByValueType = 'INCREMENT_BY_VALUE'


const initialCounterState = {
    count: 0,
    username: ["user1"]
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

const incrementByValue = (value) => {
    return {
        type: incrementByValueType,
        payload: value,
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

        case incrementByValueType:
            return {
                ...state,
                username: [...state.username, action.payload],
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
store.dispatch(incrementByValue("ravi"));
store.dispatch(incrementByValue("rayhan"));
store.dispatch(incrementByValue("ravi"));
store.dispatch(incrementByValue("rayhan"));