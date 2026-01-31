const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const initialCounterState = {
    count: 0,
}

const incrementCounter = ()=>{
    return {
        type : INCREMENT,
    }
}

const decrementCOunter = ()=>{
    return {
        type : DECREMENT,
    }
}